import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_333};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    font-weight: 500;
    height: 4.8rem;

    width: 100%;

    padding: 1.2rem 2.2rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
    
    cursor: pointer;

    > :first-child {
      width: 2.4rem;
      height: 2.4rem;
    }

    input {
      display: none;
    }
  }
`;