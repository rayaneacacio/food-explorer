import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Container } from "./style";

export function EditTag({ title, $new = false }) {
  return (
    <Container $new={ $new }>
      {
        $new ?
        <span>
          Adicionar
          <button> <AiOutlinePlus /> </button>
        </span>
        :
        <span>
          { title }
          <button> <AiOutlineClose /> </button>
        </span>
      }
    </Container>
  )
}