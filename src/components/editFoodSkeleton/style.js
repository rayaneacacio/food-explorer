import styled from "styled-components";

export const Container = styled.div`
  margin: 0 3.2rem;

  form {
    display: grid;
    grid-template-areas: 
    "img img" 
    "name name" 
    "category category" 
    "makings makings" 
    "price price" 
    "description description" 
    "button1 button2";
    grid-gap: 6rem;
  }

  div {
    background: linear-gradient(to right, #0d1d25, rgb(15 32 40 / 0.44), #0d1d25 );
    background-size: 400% 400%;

    height: 4.8rem;
    border-radius: 8px;
    
    cursor: progress;

    animation: loadingEffect 1.2s ease-in-out infinite;
  }
  
  .img {
    grid-area: img;
  }

  .name {
    grid-area: name;
  }

  .category {
    grid-area: category;
  }

  .makings {
    grid-area: makings;
  }

  .price {
    grid-area: price;
  }

  .description {
    grid-area: description;
    height: 17.2rem;
  }

  .button1 {
    grid-area: button1;
  }

  .button2 {
    grid-area: button2;
  }

  @media(min-width: 1000px) {
    form {
      grid-template-areas: 
      "img name name category category"
      "makings makings makings price price"
      "description description description description description"
      "null null null button1 button2";
    }
  }
`;