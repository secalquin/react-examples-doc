import { useContext } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "../../components/AppBar";
import ProductCard from "../../components/ProductCard";
import CartContext from "../../context/CartContext";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const { useQueryProducts } = useProducts();

  const { data, isLoading, isError } = useQueryProducts;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Navbar />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data?.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
