import { Container } from './style';

export function EditFoodSkeleton() {
  return (
    <Container>
       <form>
          <div className='img'></div>
          <div className='name'></div>
          <div className='category'></div>
          <div className='makings'></div>
          <div className='price'></div>
          <div className='description'></div>
          <div className='button1'></div>
          <div className='button2'></div>
        </form>
    </Container>
  )
}