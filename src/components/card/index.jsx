import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { HeartButton } from "../heartButton";
import { Button } from "../button";

import { Container, Span } from "./style";

export function Card({ img, title, price }) {
  let number = "01";

  return (
    <Container>
      <HeartButton id="heartButton" />

      <img src={ img } alt={ `imagem de ${title}` } />

      <button id="titleButton"> {` ${ title } >`} </button>

      <span id="price"> R$ { price } </span>

      <Span>
        <button> <AiOutlineMinus /> </button>
        { number }
        <button> <AiOutlinePlus /> </button>
      </Span>

      <div>
        <Button title="incluir" $buttonWithBackground />
      </div>
      
    </Container>
  )
}