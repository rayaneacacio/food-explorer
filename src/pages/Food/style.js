import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  &::-webkit-scrollbar {
    background: transparent;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    margin-left: 5.6rem;
    align-self: flex-start;
  }

  > img {
    width: 26.4rem;
    height: 26.4rem;

    border-radius: 50%;
    margin: 1.6rem 2.6rem;
  }

  .description {
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    text-align: center;

    width: 31.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    margin-bottom: 4.8rem;

    > h1 {
      font-size: 2.7041rem;
      font-weight: 500;
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2.4rem;
    }
  }

  .buttonEdit {
    width: 31.6rem;
    margin-bottom: 4.943rem;
  }

  .values {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    margin-bottom: 5.4rem;

    > span {
      font-size: 2.2626rem;
      font-weight: 700;

      display: flex;
      gap: 1.585rem;

      button {
        background: none;

        :first-child {
          width: 2.7152rem;
          height: 2.7152rem;
        }
      }
    }

    > div {
      width: 18.8rem;
    }
  }

  @media(min-width: 1000px) {
    padding-top: 12.8rem;

    display: grid;
    grid-template-areas: "button null" "img description" "img values" "footer footer";
    grid-template-columns: 51.1rem 1fr;
    align-items: end;
    gap: 0 4.783rem;

    > :first-child { 
      width: 10.6rem;
      margin-left: 12.2rem;
      grid-area: button;
    }

    > img {
      width: 39rem;
      height: 38.9rem;

      margin-left: 12.2rem;
      margin-top: 4.2rem;

      grid-area: img;
    }

    .description {
      font-size: 2.4rem;
      text-align: start;

      width: 68.7rem;
      height: 20.4rem;
      margin-bottom: 0;

      align-items: flex-start;
      justify-content: flex-end;

      grid-area: description;

      h1 {
        font-size: 4rem;
      }

      div {
        justify-content: start;
      }
    }

    .values {
      grid-area: values;
    }

    .buttonEdit {
      grid-area: values;
      width: 13.1rem;
    }

    footer {
      margin-top: 15rem;
      grid-area: footer;
    }
  }
`;