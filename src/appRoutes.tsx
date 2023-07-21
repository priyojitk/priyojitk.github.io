import { Route, Routes } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";
import Uuid from "./components/Uuid";
import NotFound from "./components/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uuid" element={<Uuid />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
