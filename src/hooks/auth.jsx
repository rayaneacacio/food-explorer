import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ userData, setUserData ] = useState("");

  async function signUp({ name, email, password }) {
    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso");

    } catch(error) {
      if(error) {
        alert(error.response.data.message);
      } else {
        alert("nao foi possível cadastrar");
      }
    }
    
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      setUserData({ user, token });

      api.defaults.headers.authorization = `Bearer ${ token }`;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", JSON.stringify(token));

    } catch(error) {
      if(error) {
        alert(error.response.data.message);
      } else {
        alert("nao foi possível efetuar login");
      }
    }
  }

  async function signOut() {
    setUserData("");
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:alltags");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"));
    const token = JSON.parse(localStorage.getItem("@foodexplorer:token"));
    
    if(user && token) {
      api.defaults.headers.authorization = `Bearer ${ token }`;
      setUserData({ user, token });
    }

  }, []);

  return (
    <AuthContext.Provider value ={{ signUp, signIn, signOut, userData }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };