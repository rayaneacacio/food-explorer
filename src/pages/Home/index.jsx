import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

import { Container, Section } from "./style";

export function Home() {
  function handleLeftClick() {
  }

  function handleRightClick() {
  }

  return (
    <Container>
      <Header />

      <main>
        <Banner />

        <Section>
          <h2> Refeições </h2>

          <div>
            <Card img="https://s3-alpha-sig.figma.com/img/b0c9/ae3d/7ca1a259f937ab6aebbc5ba2ffd2d4ab?Expires=1692576000&Signature=BV7wo-ZBsPSX0aq06DPPCJG1~AN3kBXVtIokHWW5CQSS6CXyPzjL2uYH-zHe7cIL4S-AhzwZiaVrfsaB1e4p85Kl45BfFGiYtr-mU3HNpZhXf9QdICkuz7QPioIwxgLcKEjO8nfBsHbLpglRyy3JyGx2ERGJlkCxDlWl6sIsg5P3-gKdLFA727AIg04hQ1353h-KfQvx3iuX0eC8trDcOAWXBIFNf~eQ0glAZQLRrqjtmM4a-MEPb37Yr~rA5e6~35VM7zSDAqvO2ABuzMVKGbRAIQSCOJqO4ojJf4pCHQyuaFa4CxMNEEQy~0G5Y8tkH0GIFjNWfXvMfsOaA0tLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="Salada Ravanello" price="49,97" />
            <Card className="cards" />
            <Card className="cards" />
            <Card className="cards" />
            <Card className="cards" />
            <Card className="cards" />

            <button className="buttonArrowLeft" onClick={ handleLeftClick }> <AiOutlineLeft /> </button>
            <button className="buttonArrowRight" onClick={ handleRightClick }> <AiOutlineRight /> </button>
          </div>
        </Section>

        <Section>
          <h2> Pratos principais </h2>
          <div>
            <Card />
            <Card />
            <Card />

            
            <button className="buttonArrowLeft" onClick={ handleLeftClick }> <AiOutlineLeft /> </button>
            <button className="buttonArrowRight" onClick={ handleRightClick }> <AiOutlineRight /> </button>
          </div>
        </Section>

        <Section>
          <h2> Bebidas </h2>
          <div>
            <Card />
            <Card />
            <Card />
            
            <button className="buttonArrowLeft" onClick={ handleLeftClick }> <AiOutlineLeft /> </button>
            <button className="buttonArrowRight" onClick={ handleRightClick }> <AiOutlineRight /> </button>
          </div>
        </Section>

        <Footer />

      </main>
      
    </Container>
  )
}