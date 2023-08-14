import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}