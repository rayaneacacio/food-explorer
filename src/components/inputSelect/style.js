import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  position: relative;

  z-index: -1;

  > :first-child {
    width: 2.4rem;
    height: 2.4rem;

    position: absolute;
    right: 1.6rem;
    bottom: 1.2rem;

    cursor: pointer;
  }

  select {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: ${({ theme }) => theme.FONTS.MAIN};
    font-size: 1.4rem;

    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border-radius: 8px;

    cursor: pointer;

    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;