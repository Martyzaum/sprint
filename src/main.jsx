import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Error from "./routes/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import Agendamento from "./routes/Agendamento.jsx";
import Resultado from "./routes/Resultado.jsx";
import Exames from "./routes/Exames.jsx";
import Contato from "./routes/Contato.jsx";
import Localizacao from "./routes/Localizacao.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/agendamento", element: <Agendamento /> },
      { path: "/exames", element: <Exames /> },
      { path: "/resultados", element: <Resultado /> },
      { path: "/contato", element: <Contato /> },
      { path: "/localizacao", element: <Localizacao /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
