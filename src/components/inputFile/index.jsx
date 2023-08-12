import { FiUpload } from "react-icons/fi";

import { Container } from "./style";

export function InputFile({ placeholder }) {
  return (
    <Container>
      Imagem do prato
      
      <label htmlFor="avatar">
        <FiUpload />
        { placeholder }
        <input id="avatar" type="file" />
      </label>
    </Container>
  )
}