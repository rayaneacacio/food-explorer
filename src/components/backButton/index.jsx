import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

import { Container } from "./style";

export function BackButton({ $saveOrEditFood }) {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container $saveOrEditFood={ $saveOrEditFood } onClick={ navigateBack }>
      <IoIosArrowBack /> voltar
    </Container>
  )
}