import { Container } from "./style";

export function Input({ icon, title, placeholder, $inputAuthPage = false, $textarea = false, $saveOrEditFood = false, ...rest }) {
  return (
    <Container $saveOrEditFood={ $saveOrEditFood } $inputAuthPage={ $inputAuthPage }>
      { title }
      <div>
        {
          icon &&
          <span> { icon } </span>
        }

        {
          $textarea ?
          <textarea name="" placeholder={ placeholder } {...rest} id="" cols="30" rows="10"></textarea>
          :
          <input type="text" placeholder={ placeholder } {...rest} />
        }
        
      </div>
    </Container>
  )
}