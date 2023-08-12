import { LuChevronDown } from "react-icons/lu";

import { Container } from "./style";

export function InputSelect() {
  return (
    <Container>
      <LuChevronDown />

      <label for="categoria"> Categoria </label>
      <select id="categoria">
        <option value="Refeição"> Refeição </option>
        <option value="prato-principal"> Prato principal </option>
        <option value="bebida"> Bebida </option>
      </select>
    </Container>
  )
}