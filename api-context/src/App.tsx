import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartDetail from "./pages/CartDetail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/cart" element={<CartDetail />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
