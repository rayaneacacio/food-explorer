import { Header } from "../../components/header";
import { BackButton } from "../../components/backButton";
import { InputFile } from "../../components/inputFile";
import { Input } from "../../components/input";
import { InputSelect } from "../../components/inputSelect";
import { InputEditTag } from "../../components/inputEditTag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { Container, Main, Div } from "./style";

export function EditFood() {
  return (
    <Container>
      <Header />

      <Main>
        <BackButton $saveOrEditFood />

        <h1>Editar Prato</h1>

        <Div>
          <InputFile placeholder="Selecione imagem para alterá-la" />
          
          <Input title="Nome" placeholder="Ex.: Salada Ceasar" $saveOrEditFood />

          <InputSelect />

          <InputEditTag />

          <Input title="Preço" placeholder="R$ 00,00" type="number" $saveOrEditFood />

          <Input title="Descrição" placeholder="A Salada César é uma opção refrescante para o verão." $textarea $saveOrEditFood />

          <div className="buttons">
            <Button title="Excluir prato" $buttonRemove />
            <Button title="Salvar alterações" $buttonSave />
          </div>
          
        </Div>
      </Main>

      <Footer />
    </Container>
  )
}