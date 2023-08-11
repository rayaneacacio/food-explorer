import { Container } from "./style";

export function Button({ icon, title, $buttonWithBackground = false, ...rest }) {
  return (
    <Container $buttonWithBackground={ $buttonWithBackground } {...rest}>
      {
        icon &&
        
        <span> { icon } </span>
      }
      { title }
    </Container>
  )
}