import { useNavigate } from "react-router-dom";

import closeIcon from "../../assets/close.svg";
import menuIcon from "../../assets/menu.svg";
import receiptIcon from "../../assets/receipt.svg";

import { Logo } from "../logo";

import { Container } from "./style";

export function Header({ menu = false }) {
  const navigate = useNavigate();

  function navigateMenu() {
    navigate("/menu");
  }

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container>
      {
        menu ?
        <div className="headerMenu">
          <button onClick={ navigateBack }>
            <img src={ closeIcon } alt="fechar o menu" />
          </button>
          <span>Menu</span>
        </div>
        :
        <div>
          <button id="buttonMenu" onClick={ navigateMenu }>
            <img src={ menuIcon } alt="abrir menu" />
          </button>

          <span>
            <Logo />
          </span>

          <button id="buttonReceipt"> 
            <img src={ receiptIcon } alt="carrinho de compras" />
            <div id="quantity"> 0 </div>
          </button>
        </div>
      }
      
    </Container>
  )
}