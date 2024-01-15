// Importações
import styled from "styled-components";

// CSS
const StyledConteudo = styled.main`
  background-color: #4c679b;
  color: white;
  display: flex;
  flex-flow: wrap;
  padding: 20px;
  margin: 20px;
  font-family: "Courier New", Courier, monospace;

  p,
  ul,
  ol {
    font-size: 20px;
  }
`;

function Conteudo({ children }) {
  return <StyledConteudo>{children}</StyledConteudo>;
}

export default Conteudo;
