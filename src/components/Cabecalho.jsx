// Importações
import Menu from "./Menu";
import styled from "styled-components";

// CSS
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: cornflowerblue;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <Menu />
      <hr />
    </StyledCabecalho>
  );
}

export default Cabecalho;
