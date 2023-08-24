import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { useAdmin } from "../../hooks/isAdmin";
import { useNotes } from "../../hooks/notes";

import { GoSearch } from "react-icons/go";
import { PiReceipt, PiSignOutLight } from "react-icons/pi";

import closeIcon from "../../assets/close.svg";
import menuIcon from "../../assets/menu.svg";

import { Logo } from "../logo";
import { Input } from "../input";
import { Button } from "../button";

import { Container } from "./style";

export function Header({ menu = false }) {
  const { signOut } = useAuth();
  const { isAdmin } = useAdmin();
  const { searchNote } = useNotes();

  const [ noteTitle, setNoteTitle ] = useState();

  const navigate = useNavigate();

  function navigateMenu() {
    navigate("/menu");
  }

  function navigateBack() {
    navigate(-1);
  }

  function navigateNewFood() {
    navigate("/new-food");
  }

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  useEffect(() => {
    async function fetchData() {
      await searchNote({ title: noteTitle });
    }

    fetchData();

  }, [ noteTitle ]);

  return (
    <Container $isAdmin={ isAdmin }>
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

          {
            !isAdmin &&
            <button id="buttonReceipt"> 
              <PiReceipt />
              <div className="quantity"> 0 </div>
            </button>
          }
        
          <div id="input">
            <Input icon={ <GoSearch /> } placeholder="Busque por pratos ou ingredientes" onChange={e => setNoteTitle(e.target.value)} />
          </div>

          {
            isAdmin ?
            <div id="buttonNewFood">
              <Button title="Novo Prato" $buttonWithBackground onClick={ navigateNewFood } />
            </div>
            :
            <button id="buttonReceiptDesktop">
              <PiReceipt />
              <p>Pedidos (0)</p>
            </button>
          }
        
          <button id="buttonSignOut" onClick={ handleSignOut }>
            <PiSignOutLight />
          </button>
        </div>
      }
      
    </Container>
  )
}