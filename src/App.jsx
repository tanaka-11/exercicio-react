// Importações
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";

import Home from "./pages/Home";
import Artistas from "./pages/Artistas";
import Musicas from "./pages/Musicas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Conteudo>
        <Cabecalho />

          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Artistas} path="/artistas" />
            <Route Component={Musicas} path="/musicas" />
          </Routes>
        </Conteudo>

      </BrowserRouter>
    </>
  );
}

export default App;
