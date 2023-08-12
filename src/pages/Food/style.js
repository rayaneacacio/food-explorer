import styled from "styled-components";

export const Container = styled.div`
  height: 91.8rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    background: transparent;
  }
`;

export const Main = styled.div`
  margin-top: 15rem;

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
`;