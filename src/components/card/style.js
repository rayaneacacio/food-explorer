import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  width: 21rem;
  height: 29.2rem;

  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  position: relative;

  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 8px;

  #heartButton, #pencilButton {
    background: none;

    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  #pencilButton {
    color: ${({ theme }) => theme.COLORS.WHITE_25};

    :first-child {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  img {
    width: 8.8rem;
    height: 8.8rem;

    border-radius: 99999px;
  }

  #titleButton {
    width: 16.2rem;
    
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE_25};
    font-size: 1.4rem;

    display: flex;
    justify-content: center;
  }

  #price {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const Div = styled.div`
  width: 21rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > div {
    width: 16.2rem;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  button {
    background: none;

    :first-child {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;