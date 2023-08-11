import { useState } from "react";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { Container } from "./style";

export function HeartButton({ ...rest }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Container onClick={ handleFavorite } {...rest}>
      {isFavorite ? <FaHeart id="fav" /> : <FaRegHeart />}
    </Container>
  )
}