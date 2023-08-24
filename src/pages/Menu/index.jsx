import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNotes } from "../../hooks/notes";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoSearch } from "react-icons/go";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

import { Container, Div } from "./style";

export function Menu() {
  const { isAdmin, signOut } = useAuth();
  const { refeicoes, sobremesas, bebidas, searchNote } = useNotes();

  const [ noteTitle, setNoteTitle ] = useState("");

  const navigate = useNavigate();

  function navigateToNewFood() {
    navigate("/new-food");
  }

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  useEffect(() => {
    async function fetchData() {
      await searchNote({ title: noteTitle });
    }
    
    fetchData();

    const responseSearch = document.querySelector(".responseSearch");
    if(!noteTitle) {
      responseSearch.style.display = "none";
    } else {
      responseSearch.style.display = "block";
    }

  }, [ noteTitle ]);

  return (
    <Container>
      <Header menu />

      <main>
        <nav>
          <Input icon={ <GoSearch /> } placeholder="Busque por pratos ou ingredientes" onChange={e => setNoteTitle(e.target.value)} />

          <div className="responseSearch">
            {
              (refeicoes.length > 0) &&
              <Div>
                <h2> Refeições </h2>

                <Swiper slidesPerView={ 1.7 } className="boxCards" >
                  {
                    refeicoes.map(note => (
                      <SwiperSlide key={ String(note.id) }>
                        <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Div>
            }

            {
              (sobremesas.length > 0) &&
              <Div>
                <h2> Sobremesas </h2>

                <Swiper slidesPerView={ 1.7 } className="boxCards">
                  {
                    sobremesas.map(note => (
                      <SwiperSlide key={ String(note.id) }>
                        <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Div>
            }

            {
              (bebidas.length > 0) &&
              <Div>
                <h2> Bebidas </h2>

                <Swiper slidesPerView={ 1.7 } className="boxCards">
                  {
                    bebidas.map(note => (
                      <SwiperSlide key={ String(note.id) }>
                        <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Div>
            }
          </div>

          {
            isAdmin &&
            <Section title="Novo Prato" onClick={ navigateToNewFood } />
          }

          <Section title="Sair" onClick={ handleSignOut } />
        </nav>
        
      </main>

      <Footer />
    </Container>
  )
}