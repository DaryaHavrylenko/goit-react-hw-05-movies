import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:not(:first-child) {
    margin-left: 20px;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
const Nav = styled.nav`
  display: flex;
  /* align-items: flex-start; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 30 px;
`;
const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
};
export default Navigation;
