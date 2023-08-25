import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  div {
    background: linear-gradient(to right, #0d1d25, rgb(15 32 40 / 0.44), #0d1d25 );
    background-size: 400% 400%;
    cursor: progress;

    animation: loadingEffect 1.2s ease-in-out infinite;
  }

  .header {
    width: 100%;
    height: 10.4rem;
  }

  .banner {
    width: 37.6rem;
    height: 12rem;
    border-radius: 3px;
    margin: 4.4rem 0 11.1rem 0;
  }

  .cards {
    background: none;
    width: 100%;

    overflow-x: auto;

    display: flex;
    gap: 1.6rem;
    margin: 0 0 7.2rem 7.2rem;

    div {
      width: 21rem;
      height: 22.9rem;
    }
  }

  @media(min-width: 1000px) {
    .banner {
      width: 112rem;
      height: 26rem;
      margin: 16.4rem 0 13.1rem 0;
    }

    .cards {
      gap: 2.7rem;
      justify-content: center;
      margin: 0 0 11.5rem 0;

      div {
        width: 30.4rem;
        height: 46.2rem;
      }
    }
  }
`;