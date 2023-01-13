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
        position: "absolute",
        bottom: 0,
      }}
    >
      i an the footer :)
    </Container>
  );
};

export default Footer;
