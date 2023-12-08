// Importações
import styled from "styled-components";

import Home from "../pages/Home";

// CSS
const StyledConteudo = styled.main`
  width: 100%;
  background-color: #4869a5;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h1 {
    margin: 20px;
    text-align: center;
    text-shadow: black 2px 2px 2px;
    color: white;
  }

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <Home />
      <h1>Teste</h1>
    </StyledConteudo>
  );
}

export default Conteudo;
