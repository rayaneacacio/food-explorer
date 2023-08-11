import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE_25};

  :first-child {
    width: 2.4rem;
    height: 2.4rem;
  }

  #fav {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`;