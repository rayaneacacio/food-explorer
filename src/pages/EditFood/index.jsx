import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useNotes } from "../../hooks/notes";
import { useTags } from "../../hooks/tags";

import { FiUpload } from "react-icons/fi";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Input } from "../../components/input";
import { InputEditTag } from "../../components/inputEditTag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { EditFoodSkeleton } from "../../components/editFoodSkeleton";

import { Container, Main, Form, InputFile, Select } from "./style";

export function EditFood() {
  const { searchNote, updateNote, updateImg, removeNote, card } = useNotes();
  const { searchTags, deleteAllTags, insertTags, tagsStorage, localTags } = useTags();

  const { title } = useParams();

  const [ loading, setLoading ] = useState(true);
  const [ image, setImage ] = useState("");
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const navigate = useNavigate();

  async function handleUpdateCard(event) {
    event.preventDefault();

    await updateNote({ id: card.id, title: name, category, price, description });
    await deleteAllTags({ note_id: card.id });
    await insertTags({ note_id: card.id });

    if(image) {
      await updateImg({ note_id: card.id, image });
    }

    alert("prato atualizado");
  }

  function changeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleDeleteCard(event) {
    event.preventDefault();

    const remove = confirm("excluir prato?");

    if(remove) {
      await removeNote({ id: card.id });
      alert("prato excluído");
      navigate("/");
    }
  }

  function handleDefaultValues() {
    setName(card.title);
    setCategory(card.category);
    setPrice(card.price);
    setDescription(card.description);
  }

  useEffect(() => {
    async function fetchData() {
      const { firstNote } = await searchNote({ title });
      const tags = await searchTags({ note_id: firstNote.id });
      await tagsStorage({ tags });
    }

    fetchData();
    handleDefaultValues();
    setLoading(false);

  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton $saveOrEditFood />

        <h1>Editar Prato</h1>

        {
          loading ? 
          <EditFoodSkeleton />
          :
          <Form>
            <InputFile>
              <span>Selecione imagem para alterá-la</span>
              <label htmlFor="image">
                <FiUpload />
                Selecione imagem
                <input id="image" type="file" onChange={ event => changeImage(event) } />
              </label>
            </InputFile>
          
            <Input title="Nome" placeholder="Ex.: Salada Ceasar" $saveOrEditFood defaultValue={ card.title } onChange={e => setName(e.target.value)} />

            <Select>
              <label htmlFor="categoria"> Categoria </label>
              <select id="categoria" onChange={e => setCategory(e.target.value)}>
                <option value="refeição"> Refeição </option>
                <option value="sobremesa"> Sobremesa </option>
                <option value="bebida"> Bebida </option>
              </select>
            </Select>

            <InputEditTag />

            <Input title="Preço" placeholder="R$ 00,00" type="number" $saveOrEditFood defaultValue={ card.price } onChange={e => setPrice(e.target.value)} />

            <Input title="Descrição" placeholder="A Salada César é uma opção refrescante para o verão." $textarea $saveOrEditFood defaultValue={ card.description } onChange={e => setDescription(e.target.value)} />

            <div className="buttons">
              <Button title="Excluir prato" $buttonRemove onClick={event => handleDeleteCard(event) } />
              <Button title="Salvar alterações" $buttonSave onClick={event => handleUpdateCard(event) } />
            </div>
          
          </Form>
        }
        
        <Footer />
      </Main>

    </Container>
  )
}