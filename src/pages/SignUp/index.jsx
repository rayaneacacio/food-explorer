import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container } from "./style";

export function SignUp() {
  const { signUp } = useAuth();
  
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  async function handleSignUp() {
    if(!name || !email || !password) {
      alert("preencha todos os campos");
      return;
    }

    await signUp({ name, email, password });
  }

  return (
    <Container>
      <Logo $logoAuthPage />

      <main>
        <h1> Crie sua conta </h1>

        <Input title="Seu nome" placeholder="Exemplo: Maria da Silva" $inputAuthPage onChange={e => setName(e.target.value)} />
        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" $inputAuthPage onChange={e => setEmail(e.target.value)} />
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" $inputAuthPage onChange={e => setPassword(e.target.value)} />

        <Button title="Criar conta" $buttonWithBackground onClick={ handleSignUp } />
        <Button title="já tenho uma uma conta" onClick={ navigateBack } />
      </main>

    </Container>
  )
}