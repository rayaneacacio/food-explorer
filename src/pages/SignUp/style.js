import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :first-child {
    margin: 15.8rem 0 7.3rem 0;
  }

  > main {
    width: 31.6rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    opacity: 0;

    animation-name: slide;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }

`;