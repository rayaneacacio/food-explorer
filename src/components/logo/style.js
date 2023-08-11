import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ $logoAuthPage, $footerLogo }) => $logoAuthPage ? "1.074rem" : ($footerLogo ? "0.647rem" : "0.8rem")};

  > img {
    width: ${({ $logoAuthPage, $footerLogo }) => $logoAuthPage ? "4.3315rem" : ($footerLogo ? "2.2rem" : "2.4613rem" )};
    height: ${({ $logoAuthPage, $footerLogo }) => $logoAuthPage ? "4.3315rem" : ($footerLogo ? "2.2rem" : "2.4613rem" )};
  }

  > h1 {
    color: ${({ theme, $footerLogo }) => $footerLogo ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE };
    font-size: ${({ $logoAuthPage, $footerLogo }) => $logoAuthPage ? "3.7243rem" : ( $footerLogo ? "1.5262rem" : "2.1163rem" )};
    font-weight: 700;
    line-height: normal;

    opacity: ${({ $logoAuthPage }) => $logoAuthPage ? "0" : "1"};
    transform: translateX( ${({ $logoAuthPage }) => $logoAuthPage && "-5rem"} );

    animation: ${({ $logoAuthPage }) => $logoAuthPage && "first 1s forwards"};
  }

  @keyframes first {
    to {
      opacity: 1;
      transform: translateX(0.5rem);
    }
  }
`;