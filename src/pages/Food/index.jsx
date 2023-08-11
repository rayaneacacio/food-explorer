import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";

import { Header } from "../../components/header";
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { Container, Main } from "./style";

export function Food() {
  let number = "01";

  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <Main>
        <button onClick={ navigateBack }> <IoIosArrowBack /> voltar </button>

        <img src="https://s3-alpha-sig.figma.com/img/b0c9/ae3d/7ca1a259f937ab6aebbc5ba2ffd2d4ab?Expires=1692576000&Signature=BV7wo-ZBsPSX0aq06DPPCJG1~AN3kBXVtIokHWW5CQSS6CXyPzjL2uYH-zHe7cIL4S-AhzwZiaVrfsaB1e4p85Kl45BfFGiYtr-mU3HNpZhXf9QdICkuz7QPioIwxgLcKEjO8nfBsHbLpglRyy3JyGx2ERGJlkCxDlWl6sIsg5P3-gKdLFA727AIg04hQ1353h-KfQvx3iuX0eC8trDcOAWXBIFNf~eQ0glAZQLRrqjtmM4a-MEPb37Yr~rA5e6~35VM7zSDAqvO2ABuzMVKGbRAIQSCOJqO4ojJf4pCHQyuaFa4CxMNEEQy~0G5Y8tkH0GIFjNWfXvMfsOaA0tLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="foto de Salada Ravanello" />

        <div className="description">
          <h1> Salada Ravanello </h1>

          <p> Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. </p>

          <div>
            <Tag title="alface" />
            <Tag title="cebola" />
            <Tag title="pao naan" />
            <Tag title="pepino" />
            <Tag title="rabanete" />
            <Tag title="tomate" />
          </div>
        </div>

        <div className="values">
          <span>
            <button> <AiOutlineMinus /> </button>
            { number }
            <button> <AiOutlinePlus /> </button>
          </span>

          <div>
            <Button icon={ <PiReceipt /> } title="pedir ∙ R$ 25,00" $buttonWithBackground />
          </div>
        </div>

      </Main>

      <Footer />
    </Container>
  )
}