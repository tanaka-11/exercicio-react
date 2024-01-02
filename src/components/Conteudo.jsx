// Importações
import styled from "styled-components";

// CSS
const StyledConteudo = styled.main`
  background-color: #555;
  color: white;
  display: flex;
  flex-flow: wrap;
  padding: 20px;
  margin: 20px;
`;


function Conteudo({ children }) {
  return (
    <StyledConteudo>
      {children}
    </StyledConteudo>
  );
}

export default Conteudo;
