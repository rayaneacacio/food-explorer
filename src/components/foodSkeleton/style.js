import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  .img {
    width: 39rem;
    height: 38.9rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      border: 6px solid ${({ theme }) => theme.COLORS.GRAY_300};;
      border-top-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
      border-radius: 50%;
      height: 50px;
      width: 50px;
      animation: spin 2s linear infinite;
    }
  }
`;