import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    background: ${({ theme, $saveOrEditFood }) => $saveOrEditFood ? theme.COLORS.BACKGROUND_333 : theme.COLORS.BACKGROUND_300};

    width: 100%;

    display: flex;
    align-items: center;

    border-radius: 0.8rem;

    span {
      padding-left: 1rem;
      
      :first-child {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    input, textarea {
      background: ${({ theme, $saveOrEditFood }) => $saveOrEditFood ? theme.COLORS.BACKGROUND_333 : theme.COLORS.BACKGROUND_300};
      width: 100%;
      padding: 1.2rem 1.4rem;
      border-radius: 0.8rem;
    }

    input {
      height: 4.8rem;
    }

    textarea {
      height: 17.2rem;
      resize: none;
    }

  }

`;