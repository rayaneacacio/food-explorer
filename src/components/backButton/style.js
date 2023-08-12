import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE_25};
  font-size: ${({ $saveOrEditFood }) => $saveOrEditFood ? "1.6546rem" : "2.4rem"};

  display: flex;
  align-items: center;

  :first-child {
    width:  ${({ $saveOrEditFood }) => $saveOrEditFood ? "2.2rem" : "3.2rem"};
    height: ${({ $saveOrEditFood }) => $saveOrEditFood ? "2.2rem" : "3.2rem"};
  }
`;