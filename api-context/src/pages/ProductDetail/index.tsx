import React, { ChangeEvent, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
  TextField,
  Chip,
  Icon,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useProductById } from "../../hooks/useProductById";
import CartContext from "../../context/CartContext";

type useParamsType = {
  id: string;
};

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams<useParamsType>();
  const [storeAvailability] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { useQueryProductById } = useProductById(Number(id));

  const { data } = useQueryProductById;

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

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
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Carousel>
            {product.images.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Imagen ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Chip label={`Stock: ${product.stock}`} color="primary" />
              <Typography variant="h6">{data?.title}</Typography>
            </Grid>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="body1">{data?.description}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6">
              Precio: {data?.price.toFixed(2)}$
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                color: storeAvailability ? "#1565c0" : "gray",
              }}
            >
              <Icon sx={{ marginRight: 1 }}>local_shipping</Icon>
              Despacho a domicilio
              <Icon
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  color: storeAvailability ? "#1565c0" : "gray",
                }}
              >
                store
              </Icon>
              Retiro en tienda
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Cantidad"
                  variant="outlined"
                  value={quantity}
                  onChange={handleQuantityChange}
                  type="number"
                  inputProps={{ min: 1, max: product.stock }}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    addToCart({
                      category: "",
                      id: 0,
                      title: "",
                      price: 0,
                      description: "",
                      image: "",
                      rate: {
                        rate: 0,
                        count: 0,
                      },
                      stock: 0,
                    })
                  }
                >
                  Agregar al carrito
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
