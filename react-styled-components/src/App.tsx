import {
  ItemLink,
  Logo,
  Menu,
  MenuItem,
  Navbar,
} from "./styled-components/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Logo>Navbar</Logo>
        <Menu>
          <MenuItem>
            <ItemLink href="#">Home</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink href="#">About</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink href="#">Contact</ItemLink>
          </MenuItem>
        </Menu>
      </Navbar>

      <div style={{ height: "100vh", backgroundColor: "black" }}></div>
    </div>
  );
}

export default App;
