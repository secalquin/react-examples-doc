import React from "react";
import { Typography, Divider, Chip, Box } from "@mui/material";
import { Product } from "../../types";

interface ProductInfoProps {
  data?: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" fontSize={"12px"}>
          SKU: {crypto.getRandomValues(new Uint32Array(1))[0]}
        </Typography>
        <Chip
          label={`Stock disponible`}
          color="primary"
          sx={{
            textTransform: "uppercase",
          }}
        />
      </Box>
      <Typography variant="h6">{data?.title}</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body1">{data?.description}</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6">Precio: {data?.price.toFixed(2)}$</Typography>
    </>
  );
};

export default ProductInfo;
