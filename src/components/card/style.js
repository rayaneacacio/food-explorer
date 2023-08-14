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

  p {
    display: none;
  }

  #price {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  @media(min-width: 1000px) {
    width: 30.4rem;
    height: 46.2rem;

    gap: 1.5rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    #titleButton {
      font-size: 2.4rem;
      width: 25.6rem;
    }

    p {
      display: block;
      font-size: 1.4rem;
    }

    #price {
      font-size: 3.2rem;
      height: 5.2rem;
    }
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

  @media(min-width: 1000px) {
    flex-direction: row;

    > div {
      width: 9.2rem;
      height: 4.8rem;
    }
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

  @media(min-width: 1000px) {
    font-size: 2rem;
  }
`;