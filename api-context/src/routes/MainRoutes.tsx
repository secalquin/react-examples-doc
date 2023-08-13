import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CartDetail from "../pages/CartDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/product/:id" element={<div>Product Detail</div>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
