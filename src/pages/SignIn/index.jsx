import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container } from "./style";

export function SignIn() {
  const { signIn } = useAuth();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function navigateToRegister() {
    navigate("/register");
  }

  async function handleSignIn() {
    await signIn({ email, password });
  }

  return (
    <Container>
      <Logo $logoAuthPage />

      <main>
        <h1>Faça login</h1>

        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" $inputAuthPage onChange={e => setEmail(e.target.value)} />
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" $inputAuthPage onChange={e => setPassword(e.target.value)} />
        
        <Button title="Entrar" $buttonWithBackground onClick={ handleSignIn } />
        <Button title="Criar uma conta" onClick={ navigateToRegister } />
      </main>

    </Container>
  )
}