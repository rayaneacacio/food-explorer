import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  transform: translateX(-10rem);

  animation-name: toTheRight;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  > main {
    width: 100%;

    padding-top: 15rem;

    display: flex;

    > div {
      width: 100%;
      padding: 0 2.8rem;

      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }
  }

  > footer {
    position: absolute;
    bottom: 0;
  }
`;