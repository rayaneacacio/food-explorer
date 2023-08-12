import { useNavigate } from "react-router-dom";

import { useAdmin } from "../../hooks/isAdmin";

import { GoSearch } from "react-icons/go";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Footer } from "../../components/footer";

import { Container } from "./style";

export function Menu() {
  const { isAdmin } = useAdmin();

  const navigate = useNavigate();

  function navigateToNewFood() {
    navigate("/new-food");
  }

  return (
    <Container>
      <Header menu />

      <main>
        <div>
          <Input icon={ <GoSearch /> } placeholder="Busque por pratos ou ingredientes" />

          {
            isAdmin &&
            <Section title="Novo Prato" onClick={ navigateToNewFood } />
          }

          <Section title="Sair" />
        </div>
        
      </main>

      <Footer />
    </Container>
  )
}