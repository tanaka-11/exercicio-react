// Importações
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// CSS
const StyledMenu = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/artistas">Artistas</NavLink>
      <NavLink to="/musicas">Músicas</NavLink>
    </StyledMenu>
  );
}

export default Menu;
