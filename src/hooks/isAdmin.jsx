import { createContext, useContext } from "react";

export const AdminContext = createContext({});

function AdminProvider({ children }) {
  const isAdmin = true;

  return (
    <AdminContext.Provider value ={{ isAdmin }}>
      { children }
    </AdminContext.Provider>
  )
}

function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}

export { AdminProvider, useAdmin };