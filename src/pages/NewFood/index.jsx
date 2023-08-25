import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useNotes } from "../../hooks/notes";
import { useTags } from "../../hooks/tags";

import { FiUpload } from "react-icons/fi";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Input } from "../../components/input";
import { InputEditTag } from "../../components/inputEditTag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { Container, Main, Form, InputFile, Select } from "./style";

export function NewFood() {
  const { newNote, updateImg } = useNotes();
  const { clearTagsStorage, insertTags, localTags } = useTags();

  const [ image, setImage ] = useState("");
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const navigate = useNavigate();

  async function handleSave(event) {
    event.preventDefault();

    if(!image || !name || !price || !description) {
      alert("preencha todos os campos.");
      return
    }

    const noteCreated = await newNote({ name, category, price, description });
    const note_id = noteCreated.data[0].id;

    await updateImg({ note_id, image });

    if(localTags.length > 0) {
      await insertTags({ note_id });
    }
    
    clearPage();
    alert("O prato foi salvo");
    navigate("/");
  }

  function changeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  function clearPage() {
    setImage("");
    setName("");
    setCategory("");
    setPrice("");
    setDescription("");

    clearTagsStorage();

    const inputs = Array.from(document.querySelectorAll("form input"));
    const textarea = document.querySelector("form textarea");

    inputs.map(input => input.value = "");
    textarea.value = "";
  }

  useEffect(() => {
    clearPage();

  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton $saveOrEditFood />

        <h1>Novo Prato</h1>

        <Form>
          <InputFile>
            <span>Imagem do prato</span>
            <label htmlFor="image">
              <FiUpload />
              Selecione imagem
              <input id="image" type="file" onChange={ event => changeImage(event) } />
            </label>
          </InputFile>
          
          <Input title="Nome" placeholder="Ex.: Salada Ceasar" $saveOrEditFood onChange={e => setName(e.target.value)} />

          <Select>
            <label htmlFor="categoria"> Categoria </label>
            <select id="categoria" onChange={e => setCategory(e.target.value)}>
              <option value="refeição"> Refeição </option>
              <option value="sobremesa"> Sobremesa </option>
              <option value="bebida"> Bebida </option>
            </select>
          </Select>

          <InputEditTag />

          <Input title="Preço" placeholder="R$ 00,00" type="number" $saveOrEditFood onChange={e => setPrice(e.target.value)} />

          <Input title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" $textarea $saveOrEditFood onChange={e => setDescription(e.target.value)} />

          <Button title="Salvar alterações" $buttonSave onClick={(event) => handleSave(event) } />
        </Form>

        <Footer />
      </Main>
   </Container>
  )
}