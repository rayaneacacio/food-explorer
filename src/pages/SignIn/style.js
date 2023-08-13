import styled from "styled-components";

export const Container = styled.div`
  /* width: 42.8rem; */
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :first-child {
    margin: 15.8rem 0 7.3rem 0;
  }

  > main {
    width: 31.6rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    opacity: 0;

    animation-name: slide;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;

    h1 {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 30.614rem;

    > :first-child {
      margin: 0;
    }

    > main {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

      width: 47.8rem;

      padding: 6.4rem;
      border-radius: 1.6rem;

      h1 {
        font-family: ${({ theme }) => theme.FONTS.BUTTONS};
        font-size: 3.2rem;
        font-weight: 500;
        text-align: center;

        display: block;
      }
    }
  }
`;