import { Container } from "./style";

export function Section({ title, ...rest }) {
  return (
    <Container {...rest}>
      <h2> { title } </h2>
    </Container>
  )
}