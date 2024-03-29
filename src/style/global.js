import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.FONTS.MAIN};
  }

  body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;

    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_25};
  }

  input, textarea {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MAIN};
    font-size: 1.6rem;
    font-weight: 400;

    outline: none;
  }

  button, a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.BUTTONS};
    font-size: 1.4rem;
    font-weight: 400;

    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  a {
    text-decoration: none;
  }

  header {
    position: fixed;
    top: 0;
    z-index: 2;
  }

  @keyframes slide {
    to {
      opacity: 1;
    }
  }

  @keyframes toTheRight {
    to {
      transform: translateX(0.2rem);
    }
  }

  @keyframes rotate {
    to {
      transform: rotateZ(45deg);
    }
  }

  @keyframes loadingEffect{
    to {
      background-position: 0% 0%;
    }

    from {
      background-position: 135% 0%;
    }
  }

  @keyframes spin {
  to { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg); 
  }
  }
`;