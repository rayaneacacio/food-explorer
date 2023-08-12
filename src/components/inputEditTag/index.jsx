import { EditTag } from "../editTag";

import { Container } from "./style";

export function InputEditTag() {
  return (
    <Container>
      Ingredientes
      <div>
        <EditTag title="Pão Naan" /> 
        <EditTag $new />
      </div>
    </Container>
  )
}