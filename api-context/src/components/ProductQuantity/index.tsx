import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Product } from "../../types";

interface ProductQuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
  addToCart: (data: Product) => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  quantity,
  setQuantity,
  stock,
}) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };

  const handleClickAddCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Cantidad"
          variant="outlined"
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
          inputProps={{ min: 1, max: stock }}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickAddCart}
        >
          Agregar al carrito
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductQuantity;
