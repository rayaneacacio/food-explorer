import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_333};

    border-radius: 0.8rem;

    display: flex;
    flex-wrap: wrap;
  }

  @media(min-width: 1000px) {
    width: 83.7rem;
  }
`;