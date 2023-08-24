import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { PiPencilSimpleDuotone } from "react-icons/pi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { HeartButton } from "../heartButton";
import { Button } from "../button";

import { Container, Span, Div } from "./style";

export function Card({ img, title, description, price, ...rest }) {
  const { isAdmin } = useAuth();

  const [ quantityOfItems, setQuantityOfItems ] = useState("01");

  const navigate = useNavigate();

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

  function navigateToFood() {
    navigate(`/food/${ title }`);
  }

  function navigateEditFood() {
    navigate(`/edit-food/${ title }`);
  }

  return (
    <Container {...rest}>
      {
        isAdmin ?
        <button id="pencilButton" onClick={ navigateEditFood } > <PiPencilSimpleDuotone /> </button>
        :
        <HeartButton id="heartButton" />
      }

      <img src={ img } alt={ `imagem de ${ title }` } />

      <button id="titleButton" onClick={ navigateToFood }> {` ${ title } >`} </button>

      <p> { description } </p>

      <span id="price"> R$ { price } </span>

      {
        !isAdmin &&
        <Div>
          <Span>
            <button onClick={ reduce1 }> <AiOutlineMinus /> </button>
            { quantityOfItems }
            <button onClick={ add1 }> <AiOutlinePlus /> </button>
          </Span>

          <div>
            <Button title="incluir" $buttonWithBackground />
          </div>
        </Div>
      }
      
    </Container>
  )
}