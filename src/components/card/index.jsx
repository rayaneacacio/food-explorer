import { useNavigate } from "react-router-dom";

import { useAdmin } from "../../hooks/isAdmin";

import { PiPencilSimpleDuotone } from "react-icons/pi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { HeartButton } from "../heartButton";
import { Button } from "../button";

import { Container, Span, Div } from "./style";

export function Card({ img, title, price, ...rest }) {
  const { isAdmin } = useAdmin();

  let number = "01";

  const navigate = useNavigate();

  function navigateToFood() {
    navigate("/food");
  }

  function navigateEditFood() {
    navigate("/edit-food");
  }

  return (
    <Container {...rest}>
      {
        isAdmin ?
        <button id="pencilButton" onClick={ navigateEditFood } > <PiPencilSimpleDuotone /> </button>
        :
        <HeartButton id="heartButton" />
      }

      <img src={ img } alt={ `imagem de ${title}` } />

      <button id="titleButton" onClick={ navigateToFood }> {` ${ title } >`} </button>

      <p>Massa fresca com camarões e pesto.</p>

      <span id="price"> R$ { price } </span>

      {
        !isAdmin &&
        <Div>
          <Span>
            <button> <AiOutlineMinus /> </button>
            { number }
            <button> <AiOutlinePlus /> </button>
          </Span>

          <div>
            <Button title="incluir" $buttonWithBackground />
          </div>
        </Div>
      }
      
    </Container>
  )
}