import styled from "styled-components";

export const Container = styled.div`
  width: 83.7rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_333};

    border-radius: 0.8rem;

    display: flex;
    flex-wrap: wrap;
  }
`;