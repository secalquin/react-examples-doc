import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 75px;
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #0065c3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
