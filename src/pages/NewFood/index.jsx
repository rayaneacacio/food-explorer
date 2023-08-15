import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { InputFile } from "../../components/inputFile";
import { Input } from "../../components/input";
import { InputSelect } from "../../components/inputSelect";
import { InputEditTag } from "../../components/inputEditTag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { Container, Main, Div } from "./style";

export function NewFood() {
  return (
    <Container>
      <Header />

      <Main>
        <BackButton $saveOrEditFood />

        <h1>Novo Prato</h1>

        <Div>
          <InputFile id="inputFile" placeholder="Selecione imagem" />
          
          <Input title="Nome" placeholder="Ex.: Salada Ceasar" $saveOrEditFood />

          <InputSelect />

          <InputEditTag />

          <Input title="Preço" placeholder="R$ 00,00" type="number" $saveOrEditFood />

          <Input title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" $textarea $saveOrEditFood />

          <Button title="Salvar alterações" $buttonSave />
        </Div>

        <Footer />
      </Main>
    </Container>
  )
}