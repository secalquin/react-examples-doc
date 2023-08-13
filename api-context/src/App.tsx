import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import MainRoutes from "./routes/MainRoutes";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
