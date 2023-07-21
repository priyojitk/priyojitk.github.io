import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./hoc/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
