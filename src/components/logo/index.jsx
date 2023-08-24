import { useAuth } from "../../hooks/auth";

import logoBlue from "../../assets/logoBlue.svg";
import logoGray from "../../assets/logoGray.svg";

import { Container } from "./style";

export function Logo({ $footerLogo = false, $logoAuthPage = false, ...rest }) {
  const { isAdmin } = useAuth();
  
  return (
    <Container $footerLogo={ $footerLogo } $logoAuthPage={ $logoAuthPage } {...rest}>
      <img src={ $footerLogo ? logoGray : logoBlue } alt="logomarca da aplicação" />
      
      <h1> food explorer </h1>

      {
        isAdmin &&
        <div> admin </div>
      }

    </Container>
  )
}