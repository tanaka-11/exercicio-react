// Importações
import Menu from "./Menu";
import styled from "styled-components";

// CSS
const StyledCabecalho = styled.header``;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <Menu />
      <hr />
    </StyledCabecalho>
  );
}

export default Cabecalho;
