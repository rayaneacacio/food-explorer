import { Container } from "./style";

export function Button({ icon, title, $buttonWithBackground = false, $buttonSave = false, $buttonRemove = false, ...rest }) {
  return (
    <Container $buttonWithBackground={ $buttonWithBackground } $buttonSave={ $buttonSave } $buttonRemove={ $buttonRemove } {...rest}>
      {
        icon &&
        
        <span> { icon } </span>
      }
      { title }
    </Container>
  )
}