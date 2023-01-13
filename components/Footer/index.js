import React from "react";
import { Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        width: "100vw",
        minWidth: "100vw",
        minHeight: "100px",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Box p={5}>
        <span>By appointment only</span>
        <span>15101 Chaparral Dr. Leander TX 78641</span>
        <span>&copy; Amanda Bozzi 2023</span>
      </Box>
    </Container>
  );
};

export default Footer;
