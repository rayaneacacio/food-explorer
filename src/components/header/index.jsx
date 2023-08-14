import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { PiReceipt, PiSignOutLight } from "react-icons/pi";

import closeIcon from "../../assets/close.svg";
import menuIcon from "../../assets/menu.svg";

import { Logo } from "../logo";
import { Input } from "../input";

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
            <PiReceipt />
            <div className="quantity"> 0 </div>
          </button>

          <div id="input">
            <Input icon={ <GoSearch /> } placeholder="Busque por pratos ou ingredientes" />
          </div>

          <button id="buttonReceiptDesktop">
            <PiReceipt />
            <p>Pedidos (0)</p>
          </button>

          <button id="buttonSignOut">
            <PiSignOutLight />
          </button>
        </div>
      }
      
    </Container>
  )
}