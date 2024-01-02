// Importações
import Menu from "./Menu";
import styled from "styled-components";

// CSS
const StyledCabecalho = styled.header`
  background-color: #555;
  color: white;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);


  h1 {
    margin: 10px;
    font-size: 1.5em;
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
