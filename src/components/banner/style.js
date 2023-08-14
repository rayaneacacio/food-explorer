import styled from "styled-components";

import bannerImg from "../../assets/bannerImage.svg";

export const Container = styled.div`
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

  width: 37.6rem;
  height: 12rem;

  display: flex;
  align-items: flex-end;

  border-radius: 8px;

  > div {
    padding: 3.6rem 0.8rem 2.2rem 0;
    margin-left: -1rem;

    h1 {
      font-family: ${({ theme }) => theme.FONTS.BUTTONS};
      font-size: 1.8rem;
      font-weight: 400;

      margin-bottom: 3px;
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE_25};
      font-size: 1.2rem;
      line-height: 140%;

      width: 20.2rem;
    }
  }

  @media(min-width: 1000px) {
    width: 112rem;
    height: 26rem;

    > img {
      width: 63.2rem;
      height: 40.6rem;
    }
    
    > div {
      padding: 8.8rem 10rem 9.2rem 0;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.6rem;
        width: 42.1rem;
      }
    }
  }
`;

export const Img = styled.div`
  background: url(${bannerImg}) no-repeat;

  width: 19.1rem;
  height: 14.9rem;

  position: relative;
  left: -1rem;

  @media(min-width: 1000px) {
    background-size: cover;

    width: 54.2rem;
    height: 36.6rem;

    left: -5rem;
  }
`;