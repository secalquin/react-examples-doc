import { useContext } from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartSize } = useContext(CartContext);

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Badge badgeContent={cartSize} color="error">
              <ShoppingCartIcon onClick={() => navigate("/cart")} />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
