import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    display: flex;
    align-items: center;
    gap: 1.4rem;

    width: 100%;
    height: 4.8rem;

    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;

    span {
      :first-child {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    input {
      width: 100%;
    }
  }

`;