import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

import { useAuth } from "../hooks/auth";

export default function Routes() {
  const { userData } = useAuth();

  return (
    <BrowserRouter>
      { userData ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}