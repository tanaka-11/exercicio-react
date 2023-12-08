// Importações
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import styled from "styled-components";

// CSS
const StyledCabecalho = styled.header`
  background-color: black;
  width: 80%;
  margin: auto;

  h1 {
    color: white;
    text-align: center;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1>Exercicio React</h1>
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
