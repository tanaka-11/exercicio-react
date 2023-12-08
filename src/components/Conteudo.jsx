// Importações
import styled from "styled-components";

// CSS
const StyledConteudo = styled.main`
  display: flex;
  flex-flow: wrap column;
  width: 80%;
  margin: auto;
  background-color: cornflowerblue;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
    color: white;
    text-transform: uppercase;
  }

  p {
    margin: 10px;
    font-weight: 600;
  }
`;

function Conteudo({ children }) {
  return <StyledConteudo>{children}</StyledConteudo>;
}

export default Conteudo;
