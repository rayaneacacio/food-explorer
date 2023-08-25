import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  padding-top: 11.5rem;

  overflow: hidden;

  > main {
    width: 100%;
    height: 100%;

    padding-top: 2.4rem;

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
      margin: 3rem 2rem 6.2rem 3.6rem;
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
      padding-top: 10.4rem;

      &::-webkit-scrollbar {
        background: transparent;
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: white;
      }
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 2.4rem;

  opacity: 0;

  animation: slide 0.3s forwards;

  > h2 {
    margin-left: 2.4rem;
  }

  .boxCards {
    padding: 2.4rem;
  }

  .swiper-button-prev, .swiper-button-next {
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

    .boxCards {
      width: 112.5rem;
      height: 46.2rem;
    }

    .swiper-button-prev, .swiper-button-next {
      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 22.4rem;
      height: 100%;

      position: absolute;
      top: 4rem;

      display: flex;
    }

    .swiper-button-prev {
      background: var(--gradients-100, linear-gradient(-90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));
      left: 0;
      justify-content: flex-start;
    }

    .swiper-button-next {
      background: var(--gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%));
      right: 0;
      justify-content: flex-end;
    }
  }
`;