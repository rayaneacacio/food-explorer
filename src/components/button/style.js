import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme, $buttonWithBackground }) => $buttonWithBackground ? theme.COLORS.RED : "none"};

  width: 100%;
  height: 4.8rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.541rem;

  span {
    :first-child {
      width: 2.1rem;
      height: 2.1rem;

      margin-top: 0.5rem;
    }
  }
`;