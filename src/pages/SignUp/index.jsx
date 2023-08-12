import { useNavigate } from "react-router-dom";

import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container } from "./style";

export function SignUp() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Logo $logoAuthPage />

      <main>
        <Input title="Seu nome" placeholder="Exemplo: Maria da Silva" />
        <Input title="title" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" $buttonWithBackground />
        <Button title="já tenho uma uma conta" onClick={ navigateBack } />
      </main>

    </Container>
  )
}