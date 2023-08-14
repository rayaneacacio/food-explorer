import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_555};
  font-size: 1.2rem;

  width: 100%;
  height: 7.7rem;

  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.8rem;

  > span {
    padding-bottom: 0.2rem;
  }

  @media(min-width: 1000px) {
    padding: 2.4rem 12.3rem;
  }
`;