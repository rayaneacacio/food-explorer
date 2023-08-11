import styled from "styled-components";

export const Container = styled.button`
  background: none;
  text-align: left;
  
  width: 100%;

  h2 {
    font-size: 2.4rem;
    font-weight: 300;

    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_290};
  }
`;