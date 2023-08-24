import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Food } from "../pages/Food";
import { NewFood } from "../pages/NewFood";
import { EditFood } from "../pages/EditFood";

export function AppRoutes() {
  const { isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/food/:title" element={ <Food /> } />
      {
        isAdmin &&
        <Route path="/new-food" element={ <NewFood /> } /> 
      }
      {
        isAdmin &&
        <Route path="/edit-food/:title" element={ <EditFood /> } /> 
      }
    </Routes>
  )
}