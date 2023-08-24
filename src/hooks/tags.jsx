import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const TagsContext = createContext({});

function TagsProvider({ children }) {
  const [ localTags, setLocalTags ] = useState([]);
  const [ cardTags, setCardTags ] = useState([]);
  
  function tagsStorage({ tags }) {
    setLocalTags(tags);
    localStorage.setItem("@foodexplorer:localtags", JSON.stringify(tags));
  }

  function clearTagsStorage() {
    localStorage.removeItem("@foodexplorer:cardTags");
    localStorage.removeItem("@foodexplorer:localtags");
    setCardTags([]);
    setLocalTags([]);
  }

  function filterTags({ title }) {
    const filteredTags = localTags.filter(tag => {return tag.title !== title });

    if(filteredTags.length > 0) {
      localStorage.setItem("@foodexplorer:localtags", JSON.stringify(filteredTags));
      setLocalTags(filteredTags);
    } else {
      localStorage.removeItem("@foodexplorer:localtags");
      setLocalTags([]);
    }

  }

  async function insertTags({ note_id }) {
    const arrayTags = localTags.map(tag => {return tag.title});
    
    await api.post("/tags", { note_id, tags: arrayTags });

    setLocalTags([]);
    localStorage.removeItem("@foodexplorer:localtags");
  }

  async function searchTags({ note_id }) {
    const response = await api.post("/tags/index", { note_id });
    const tags = response.data;

    setCardTags(tags);
    localStorage.setItem("@foodexplorer:cardTags", JSON.stringify(tags));

    return tags;
  }

  function receiveTags() {
    setLocalTags(cardTags);
  }

  async function deleteAllTags({ note_id }) {
    await api.post("/tags/delete", { note_id });
  }

  useEffect(() => {
    const tagsLocalStorage = JSON.parse(localStorage.getItem("@foodexplorer:localtags"));
    const tagsOfCard = JSON.parse(localStorage.getItem("@foodexplorer:cardTags"));

    if(tagsLocalStorage) {
      setLocalTags(tagsLocalStorage);
    }

    if(tagsOfCard) {
      setCardTags(tagsOfCard);
    }

  }, []);

  return (
    <TagsContext.Provider value ={{ tagsStorage, clearTagsStorage, filterTags, insertTags, searchTags, receiveTags, deleteAllTags, localTags, cardTags }}>
      { children }
    </TagsContext.Provider>
  )
}

function useTags() {
  const context = useContext(TagsContext);
  return context;
}

export { TagsProvider, useTags };