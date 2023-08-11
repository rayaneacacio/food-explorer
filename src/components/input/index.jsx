import { Container } from "./style";

export function Input({ icon, title, placeholder, ...rest }) {
  return (
    <Container>
      { title }
      <div>
        {
          icon &&
          <span> { icon } </span>
        }
        <input type="text" placeholder={ placeholder } {...rest} />
      </div>
    </Container>
  )
}