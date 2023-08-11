import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

  width: 37.6rem;
  height: 12rem;

  display: flex;
  align-items: flex-end;

  border-radius: 0.2917rem;

  /* animation: animationGradient 5s infinite; */

  > img {
    width: 19.1rem;
    height: 14.9rem;

    position: relative;
    left: -2rem;
  }

  > div {
    padding: 3.6rem 0.8rem 2.2rem;
    margin-left: -4rem;

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

  /* @keyframes animationGradient {
    0% {
      background-position-y: 0%;
    }
    100% {
      background-position-y: 100%;
    } */
  /* } */
`;