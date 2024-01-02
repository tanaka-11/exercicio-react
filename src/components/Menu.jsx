// Importações
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// CSS
const StyledMenu = styled.nav`
  display: flex;
  flex-flow: column;
  width: 200px; // Largura do menu lateral 
  background-color: #333;
  padding: 20px; // Espaçamento interno

  a {
    text-decoration: none;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #555;
    }

    &.active {
      background-color: #666;
    }
  }
`;

function Menu() {
  return (
    <>
      <StyledMenu>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/artistas" activeClassName="active">
          Artistas
        </NavLink>

        <NavLink to="/musicas" activeClassName="active">
          Músicas
        </NavLink>
      </StyledMenu>
    </>
  );
}

export default Menu;

