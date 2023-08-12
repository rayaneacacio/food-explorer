import { Container } from "./style";

export function Input({ icon, title, placeholder, $textarea, $saveOrEditFood, ...rest }) {
  return (
    <Container $saveOrEditFood={ $saveOrEditFood }>
      { title }
      <div>
        {
          icon &&
          <span> { icon } </span>
        }

        {
          $textarea ?
          <textarea name="" placeholder={ placeholder } id="" cols="30" rows="10"></textarea>
          :
          <input type="text" placeholder={ placeholder } {...rest} />
        }
        
      </div>
    </Container>
  )
}