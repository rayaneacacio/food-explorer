import { useState, useEffect } from "react";

import { useTags } from "../../hooks/tags";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Container } from "./style";
import { useParams } from "react-router-dom";

export function EditTag({ title, $new = false, ...rest }) {
  const { tagsStorage, filterTags, receiveTags, localTags } = useTags();

  const [ newIngredient, setNewIngredient ] = useState("");
  const [ newTag, setNewTag ] = useState([]);
  const [ ingredients, setIngredients ] = useState(localTags);

  const editFood = useParams();

  function handleAddTag(event) {
    event.preventDefault()
    setIngredients([...ingredients, newTag]);
    document.querySelector(".addIngredient").value = "";
  }

  function handleRemoveTag(event, title) {
    event.preventDefault();
    filterTags({ title });
  }

  useEffect(() => {
    if(editFood) {
      receiveTags();
    }

  }, []);

  useEffect(() => {
    if(localTags) {
      setIngredients(localTags);
    }
    
  }, [ localTags ]);

  useEffect(() => {
    const tag = {
      title: newIngredient
    };

    setNewTag(tag);

  }, [ newIngredient ]);

  useEffect(() => {
    if(ingredients.length > 0) {
      tagsStorage({ tags: ingredients });
    }

  }, [ ingredients ]);

  return (
    <Container $new={ $new } {...rest}>
      {
        $new ?
        <span>
          <input className="addIngredient" type="text" placeholder="Adicionar" onChange={e => setNewIngredient(e.target.value)} />
          <button onClick={(event) => handleAddTag(event)}> <AiOutlinePlus /> </button>
        </span>
        :
        <span>
          { title }
          <button onClick={(event) => handleRemoveTag(event, title)}> <AiOutlineClose /> </button>
        </span>
      }
    </Container>
  )
}