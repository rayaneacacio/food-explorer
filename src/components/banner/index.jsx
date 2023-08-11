import bannerImg from "../../assets/bannerImage.svg";

import { Container } from "./style";

export function Banner() {
  return (
    <Container>
      <img src={ bannerImg } alt="" />
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}