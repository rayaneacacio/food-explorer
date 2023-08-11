import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;

  padding-top: 12.9rem;

  > main {
    width: 100%;
    height: 80.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow-y: auto;
    overflow-x: hidden;

    > :first-child {
      margin: 67.8rem 0 6.2rem 3.6rem;
    }
  }

  main::-webkit-scrollbar {
    color: transparent;
    width: 1px;
  }

  > :last-child {
    position: relative;
  }
`;

export const Section = styled.section`
  > h2 {
    margin-left: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;

    padding: 2.4rem;

    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  > div::-webkit-scrollbar {
    color: transparent;
  }
`;