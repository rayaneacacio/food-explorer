import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useNotes } from "../../hooks/notes";
import { useTags } from "../../hooks/tags";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";
import { HomeSkeleton } from "../../components/homeSkeleton";

import { Container, Section } from "./style";

export function Home() {
  const { viewNotes, splitNotes, clearNoteStorage, refeicoes, sobremesas, bebidas } = useNotes();
  const { clearTagsStorage } = useTags();

  const [ loading, setLoading ] = useState(true);
  const [ sliderPerView, setSliderPerview ] = useState(3.3);

  function handleResize() {
    if(window.innerWidth > 750) {
      setSliderPerview(3.3);
    } else if (window.innerWidth > 600) {
      setSliderPerview(2.5);
    } else if (window.innerWidth > 610) {
      setSliderPerview(2.3);
    } else {
      setSliderPerview(1.7);
    }
  }

  function pathSections() {
    const allSections = document.querySelectorAll("section");
    window.scroll({
      top: (allSections[0].offsetTop),
      behavior: "smooth",
    });
  }

  useEffect(() => {
    async function fetchData() {
      clearTagsStorage();
      clearNoteStorage();
      await viewNotes();
      await splitNotes();
    }
    
    fetchData();   
    setLoading(false);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (
    <>
    { loading ?
    <HomeSkeleton />
    :
    <Container>
      <Header onFocus={ pathSections } />

      <main>
        <Banner />

        {
          (refeicoes.length > 0) &&
          <Section>
            <h2> Refeições </h2>

            <Swiper slidesPerView={ sliderPerView } navigation className="boxCards" >
              {
                refeicoes.map(note => (
                  <SwiperSlide key={ String(note.id) }>
                    <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Section>
        }

        {
          (sobremesas.length > 0) &&
          <Section>
            <h2> Sobremesas </h2>

            <Swiper slidesPerView={ sliderPerView } navigation className="boxCards">
              {
                sobremesas.map(note => (
                  <SwiperSlide key={ String(note.id) }>
                    <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Section>
        }

        {
          (bebidas.length > 0) &&
          <Section>
            <h2> Bebidas </h2>

            <Swiper slidesPerView={ sliderPerView } navigation className="boxCards">
              {
                bebidas.map(note => (
                  <SwiperSlide key={ String(note.id) }>
                    <Card img={ `${api.defaults.baseURL}/files/${note.image}` } title={ note.title } description={ note.description } price={ note.price } />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Section>
        }

        <Footer />

      </main>
    </Container>
    }
    </>
  )
}