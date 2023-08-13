import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

import { Container } from "./style";

export function BackButton({ $saveOrEditFood }) {
  const navigate = useNavigate();

  function navigateBackHome() {
    navigate("/");
  }

  return (
    <Container $saveOrEditFood={ $saveOrEditFood } onClick={ navigateBackHome }>
      <IoIosArrowBack /> voltar
    </Container>
  )
}