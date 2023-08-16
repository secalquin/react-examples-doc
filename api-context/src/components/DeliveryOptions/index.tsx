import React from "react";
import { Typography, Icon, Box } from "@mui/material";

interface DeliveryOptionsProps {
  storeAvailability: boolean;
}

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({
  storeAvailability,
}) => {
  return (
    <>
      <Typography variant="button">Tipos de entrega:</Typography>
      <Box mt={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            sx={{
              marginRight: 1,
              color: storeAvailability ? "#1565c0" : "gray",
            }}
          >
            storefront
          </Icon>
          <div>
            <Typography variant="body2" color={"GrayText"}>
              Retiro en tienda
            </Typography>
            <Typography color={"#1565c0"}>
              Disponible para Santiago Centro
            </Typography>
          </div>
        </Box>
        <Box
          mt={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            sx={{
              marginRight: 1,
              color: storeAvailability ? "#1565c0" : "gray",
            }}
            color={"success"}
          >
            local_shipping
          </Icon>
          <div>
            <Typography variant="body2">Despacho a domicilio</Typography>
            <Typography color={"#1565c0"}>Disponible</Typography>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DeliveryOptions;
