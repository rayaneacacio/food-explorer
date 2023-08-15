import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_333};
    height: 4.8rem;

    border-radius: 0.8rem;

    display: flex;
    flex-wrap: wrap;
  }
`;