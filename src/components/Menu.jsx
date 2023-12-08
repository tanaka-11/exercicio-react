// Importações
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// CSS
const StyledMenu = styled.nav`
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  /* flex-flow: column; */

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
  }
`;

function Menu() {
  return (
    <>
      <StyledMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/artistas">Artistas</NavLink>
        <NavLink to="/musicas">Músicas</NavLink>
      </StyledMenu>
    </>
  );
}

export default Menu;
