import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BORDER_290};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;

  padding: 4px 8px;
  border-radius: 5px;
`;