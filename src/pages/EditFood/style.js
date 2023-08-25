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

export const Form = styled.div`
  margin: 0 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  opacity: 0;

  animation: slide 0.3s forwards;

  .buttons {
    display: flex;
    gap: 3.2rem;

    :first-child {
      background: ${({ theme }) => theme.COLORS_BACKGROUND_333};
    }
  }

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

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > :first-child {
    width: 2.4rem;
    height: 2.4rem;

    cursor: pointer;
  }

  select {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: ${({ theme }) => theme.FONTS.MAIN};
    font-size: 1.4rem;

    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border-radius: 8px;

    cursor: pointer;
  }
`;

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_333};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    font-weight: 500;
    height: 4.8rem;

    width: 100%;

    padding: 1.2rem 2.2rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
    
    cursor: pointer;

    > :first-child {
      width: 2.4rem;
      height: 2.4rem;
    }

    input {
      display: none;
    }
  }
`;