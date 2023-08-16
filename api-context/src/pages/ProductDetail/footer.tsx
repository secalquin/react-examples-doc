import { useState } from "react";
import { Box, Tabs, Tab, Container } from "@mui/material";

const FooterDetail = (): JSX.Element => {
  const [tabSelected, setTabSelected] = useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue);
  };

  return (
    <Container fixed>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          variant="fullWidth"
          scrollButtons="auto"
          value={tabSelected}
          onChange={handleChange}
        >
          <Tab value={1} label="Descripción"></Tab>
          <Tab value={2} label="Información Adicional" />
          <Tab value={3} label="Comentarios" />
        </Tabs>
      </Box>
    </Container>
  );
};

export default FooterDetail;
