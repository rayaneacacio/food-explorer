import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useAdmin } from "../../hooks/isAdmin";
import { useNotes } from "../../hooks/notes";
import { useTags } from "../../hooks/tags";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { Container, Main } from "./style";

export function Food() {
  const { isAdmin } = useAdmin();
  const { searchNote, card } = useNotes();
  const { searchTags, cardTags } = useTags();

  const navigate = useNavigate();

  const { title } = useParams();

  const [ quantityOfItems, setQuantityOfItems ] = useState("01");

  function navigateToEditFood() {
    navigate(`/edit-food/${ title }`);
  }

  function add1() {
    let number = 0;

    if(quantityOfItems > 8) {
      number = quantityOfItems;
      number++;

      setQuantityOfItems(number);
      return
    }

    number = quantityOfItems.split(0)[1];
    number++

    setQuantityOfItems(`0${number}`);
  }

  function reduce1() {
    let number = 0;
    if(quantityOfItems < 2) {
      return
    }
    
    if(quantityOfItems < 11) {
      number = quantityOfItems;
      number--;
      setQuantityOfItems(`0${number}`);
      return
    }

    number = quantityOfItems;
    number--;

    setQuantityOfItems(number);
  }

  useEffect(() => {
    async function fetchData() {
      await searchNote({ title });
      await searchTags({ note_id: card.id });
    }

    fetchData();

  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton />

        <img src={`${ api.defaults.baseURL}/files/${ card.image }`} alt={ `foto de ${ card.title }` } />

        <div className="description">
          <h1> { card.title } </h1>

          <p> { card.description } </p>

          <div>
            {
              cardTags &&
              cardTags.map(tag => (
                <Tag key={ String(tag.id) } title={ tag.title } />
              ))
            }
          </div>
        </div>

        { 
          isAdmin ?
          <div className="buttonEdit">
            <Button title="Editar prato" $buttonWithBackground onClick={ navigateToEditFood } />
          </div>
          :
          <div className="values">
            <span>
              <button onClick={ reduce1 }> <AiOutlineMinus /> </button>
              { quantityOfItems }
              <button onClick={ add1 }> <AiOutlinePlus /> </button>
            </span>

            <div>
              <Button icon={ <PiReceipt /> } title={`pedir ∙ R$ ${ card.price }`} $buttonWithBackground />
            </div>
          </div>
        }

        <Footer />

      </Main>
    </Container>
  )
}