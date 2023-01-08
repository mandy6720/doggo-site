import React from "react";

import { Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        width: "100vw",
        minWidth: "100vw",
        height: "100px",
        position: "fixed",
        bottom: {0}
      }}
    >
      Footer
    </Container>
  );
};

export default Footer;
