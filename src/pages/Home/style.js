import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding-top: 11.5rem;

  overflow: hidden;

  > main {
    width: 100%;
    height: 100%;

    padding-top: 11.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    > :first-child {
      margin: 65rem 2rem 6.2rem 3.6rem;
      align-self: center;
    }
  }

  > :last-child {
    position: relative;
  }

  @media(min-width: 1000px) {
    width: 100%;

    padding-top: 10.5rem;

    > main {
      align-items: center;
      padding-top: 65rem;

      &::-webkit-scrollbar {
        background: transparent;
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: white;
      }

      > :first-child {
        margin-top: 100rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 2.4rem;

  > h2 {
    margin-left: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;

    padding: 2.4rem;

    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .buttonArrowLeft, .buttonArrowRight {
    display: none;
  }

  @media(min-width: 1000px) {
    width: 112.2rem;
    margin-bottom: 4.7rem;

    position: relative;

    > h2 {
      font-size: 3.2rem;
      font-weight: 500;
    }

    .buttonArrowLeft, .buttonArrowRight {
      width: 22.4rem;

      position: absolute;
      top: 6rem;
      bottom: 4.5rem;

      display: block;
      flex-shrink: 0;

      :first-child {
        width: 4rem;
        height: 4rem;
      }
    }

    .buttonArrowLeft {
      background: var(--gradients-100, linear-gradient(-90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));
      left: 0;
    }

    .buttonArrowRight {
      background: var(--gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));
      right: 0;
    }
  }
`;