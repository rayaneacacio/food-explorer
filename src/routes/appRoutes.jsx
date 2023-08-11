import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Food } from "../pages/Food";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/food" element={ <Food /> } />
    </Routes>
  )
}