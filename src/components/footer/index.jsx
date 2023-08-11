import { Logo } from "../logo";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <Logo $footerLogo />
      <span> © 2023 - Todos os direitos reservados. </span>
    </Container>
  )
}