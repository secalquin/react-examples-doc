import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Grid,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { useProductById } from "../../hooks/useProductById";
import CartContext from "../../context/CartContext";

import ProductImageCarousel from "../../components/Carousel/productImages";
import DeliveryOptions from "../../components/DeliveryOptions";
import ProductInfo from "../../components/ProductInfo";
import ProductQuantity from "../../components/ProductQuantity";
import FooterDetail from "./footer";

type useParamsType = {
  id: string;
};

const ProductDetail: React.FC = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams<useParamsType>();
  const [storeAvailability] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { useQueryProductById } = useProductById(Number(id));
  const { data, isLoading } = useQueryProductById;

  // Simulando datos del producto
  const product = {
    id,
    name: "Producto Ejemplo",
    description: "Esta es una descripción de ejemplo para el producto.",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    deliveryOptions: ["Envío estándar", "Envío rápido", "Recogida en tienda"],
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    stock: 10,
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductImageCarousel images={product.images} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              {isLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "55vh",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <ProductInfo data={data} />
                  <Divider sx={{ marginY: 2 }} />
                  <DeliveryOptions storeAvailability={storeAvailability} />
                  <Divider sx={{ marginY: 2 }} />
                  <ProductQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={product.stock}
                    addToCart={addToCart}
                  />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <FooterDetail />
    </>
  );
};

export default ProductDetail;
