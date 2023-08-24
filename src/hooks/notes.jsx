import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const NotesContext = createContext({});

function NotesProvider({ children })  {
  const [ allNotes, setAllNotes ] = useState([]);
  const [ card, setCard ] = useState({});

  const [ refeicoes, setRefeicoes ] = useState([]);
  const [ sobremesas, setSobremesas ] = useState([]);
  const [ bebidas, setBebidas ] = useState([]);

  async function newNote({ name, category, price, description }) {
    if(!category) {
      category = "refeiçao"
    }
    
    const noteCreated = await api.post("/notes", { title: name, category, price, description });
    return noteCreated;
  }

  async function updateImg({ note_id, image }) {
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", image);

    await api.patch(`/notes/patch_image?note_id=${ note_id }`, fileUploadForm);
  }

  async function viewNotes() {
    const response = await api.get("/notes");
    const notes = response.data;

    setAllNotes(notes);
    localStorage.setItem("@foodexplorer:allnotes", JSON.stringify(notes));
  }

  async function searchNote({ title }) {
    if(!title) {
      viewNotes();
      return;
    }

    const response = await api.post("/notes/show", { title });
    const responseByTags = await api.post("/tags/show", { title });

    const firstNote = response.data[0];
    const data = (response.data).concat(responseByTags.data);

    const uniqueNotes = [];
    data.map(item => {
      if(!uniqueNotes[item.id]) {
        uniqueNotes[item.id] = item;
      }

    });

    const notes = Object.values(uniqueNotes);

    setAllNotes(notes);
    setCard(firstNote);

    if(firstNote) {
      localStorage.setItem("@foodexplorer:note", JSON.stringify(firstNote));
    }
    
    localStorage.setItem("@foodexplorer:allnotes", JSON.stringify(notes));

    return { notes, firstNote };
  }

  async function updateNote({ id, title, category, price, description }) {
    await api.put("/notes", { id, title, category, price, description });
  }

  async function removeNote({ id }) {
    await api.post("/notes/delete", { id });
  }

  function clearNoteStorage() {
    localStorage.removeItem("@foodexplorer:note")
    setCard({});
  }

  function splitNotes() {
    const arraySobremesas = [];
    const arrayBebidas = [];
    const arrayRefeicoes = [];

    allNotes.forEach(note => {
      if(note.category === "sobremesa") {
        arraySobremesas.push(note);

      } else if(note.category === "bebida") {
        arrayBebidas.push(note);

      } else {
        arrayRefeicoes.push(note);

      }

    });

    setSobremesas(arraySobremesas);
    setBebidas(arrayBebidas);
    setRefeicoes(arrayRefeicoes);

  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("@foodexplorer:allnotes"));
    const cardFood = JSON.parse(localStorage.getItem("@foodexplorer:note"));

    if(notes) {
      setAllNotes(notes);
    }

    if(cardFood) {
      setCard(cardFood);
    }

  }, []);

  useEffect(() => {
    splitNotes();

  }, [ allNotes ]);

  return (
    <NotesContext.Provider value={{ newNote, updateImg, viewNotes, searchNote, updateNote, removeNote, splitNotes, clearNoteStorage, allNotes, card, refeicoes, sobremesas, bebidas }}>
      { children }
    </NotesContext.Provider>
  )
}

function useNotes() {
  const context = useContext(NotesContext);
  return context;
}

export { NotesProvider, useNotes };