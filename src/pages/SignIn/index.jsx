import { useNavigate } from "react-router-dom";

import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container } from "./style";

export function SignIn() {
  const navigate = useNavigate();

  function navigateToRegister() {
    navigate("/register");
  }

  return (
    <Container>
      <Logo $logoAuthPage />

      <main>
        <h1>Faça login</h1>

        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" $inputAuthPage />
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" $inputAuthPage />
        
        <Button title="Entrar" $buttonWithBackground />
        <Button title="Criar uma conta" onClick={ navigateToRegister } />
      </main>

    </Container>
  )
}