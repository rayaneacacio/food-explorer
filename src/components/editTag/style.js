import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme, $new }) => $new ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
  height: 3.2rem;

  padding: 1rem 1.6rem 3.5rem;

  span {
    background: ${({ theme, $new }) => $new ? "none" : theme.COLORS.GRAY_300};

    height: 3.2rem;

    padding: 1rem 1.6rem;
    border: ${({ theme, $new }) => $new ? `1px dashed ${theme.COLORS.GRAY_500}` : "none"};
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  input {
    background: none;
    width: 10rem;
  }

  button {
    background: none;
    margin-top: 0.3rem;
  }
`;