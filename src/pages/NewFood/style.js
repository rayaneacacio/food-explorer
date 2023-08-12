import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  width: 36.4rem;
  margin: 12.492rem 0 5.3rem 3.2rem;

  overflow-y: auto;

  h1 {
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    font-weight: 500;

    margin: 3.5rem 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;