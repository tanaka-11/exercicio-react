// Importações
import styled from "styled-components";

// CSS
const StyledConteudo = styled.main`
  background-color: #555;
  color: white;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  padding: 20px;
`;

function Conteudo({ children }) {
  return (
    <StyledConteudo>
      <ConteudoWrapper>{children}</ConteudoWrapper>
    </StyledConteudo>
  );
}

export default Conteudo;
