import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  transform: translateX(-10rem);

  animation-name: toTheRight;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  > main {
    width: 100%;
    height: 100%;

    padding-top: 15rem;

    /* display: flex; */

    > div {
      display: none;
    }

    > nav {
      width: 100%;
      /* height: 100%; */
      padding: 0 2.8rem;

      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }
  }

  > footer {
    /* position: absolute; */
    /* bottom: 0; */
  }
`;

export const Div = styled.div`
  margin-bottom: 2.4rem;

  > h2 {
    margin-left: 2.4rem;
  }

  .boxCards {
    padding: 2.4rem;
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }
`;