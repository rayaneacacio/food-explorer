import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  padding-top: 12.492rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    margin-left: 3.2rem;
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    font-weight: 500;

    margin: 3.5rem 3.2rem;
  }

  footer {
    margin-top: 5.3rem;
  }

  @media(min-width: 1000px) {
    > :first-child, > h1 {
      margin-left: 12.3rem;
    }

    footer {
      margin-top: 11.6rem;
    }
  }
`;

export const Div = styled.div`
  margin: 0 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media(min-width: 1000px) {
    margin: 0 12.3rem 0 12.5rem;

    display: grid;
    grid-template-areas: 
    "img name category category category" 
    "makings makings makings price price" 
    "description description description description description" 
    "null null null null button";
    grid-template-columns: "22.9rem" "46.3rem" "11.3rem" "25.1rem" "17.2rem";
    align-items: end;

    > :first-child {
      grid-area: img;
    }

    > :nth-child(2) {
      grid-area: name;
    }

    > :nth-child(3) {
      grid-area: category;
    }

    > :nth-child(4) {
      grid-area: makings;
    }

    > :nth-child(5) {
      grid-area: price;
    }

    > :nth-child(6) {
      grid-area: description;
    }

    > :last-child {
      grid-area: button;
    }
  }
`;