import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  width: 100%;
  height: 11.4rem;

  padding: 6rem 0 2.8rem 0;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .headerMenu {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.1163rem;
    font-weight: 400;
  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.6rem;

    margin-left: 2.8rem;

    > button {
      background: none;
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  
  #buttonMenu {
    background: none;
    width: 2.4rem;
    height: 1.8rem;
  }

  #buttonMenu:hover {
    transition: transform;

    animation-name: rotate;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  #input, #buttonReceiptDesktop, #buttonSignOut {
    display: none;
  }

  #buttonReceipt {
    background: none;
    height: 3.2rem;

    > :first-child {
      width: 3.2rem;
      height: 3.2rem;
    }

    .quantity {
      background: ${({ theme }) => theme.COLORS.RED};
      font-family: ${({ theme }) => theme.FONTS.BUTTONS};
      font-size: 1.4rem;

      width: 2rem;
      height: 2rem;

      border-radius: 9.9rem;

      position: relative;
      top: -4.3rem;
      right: -1.8rem;
    }
  }

  @media(min-width: 1000px) {
    height: 10.4rem;

    display: flex;
    justify-content: center;

    > div {
      gap: 3.2rem;
    }

    #buttonMenu, #buttonReceipt {
      display: none;
    }

    #input {
      width: 47rem;
      display: block;
    }

    #buttonReceiptDesktop {
      background: ${({ theme }) => theme.COLORS.RED};
      width: 21.6rem;

      padding: 1.2rem 3.2rem;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      :first-child {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    #buttonSignOut {
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};

      display: block;

      > :first-child {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media(min-width: 1150px) {
    #input {
      width: 58.1rem;
    }
  }
`;