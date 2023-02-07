import React from "react";
import { Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        width: "100vw",
        minWidth: "100vw",
        minHeight: "300px",
        poistion: "relative",
        display: "flex",
        justifyContent: "space-between",
        bottom: "-90px",
        "@media screen and (min-width: 450px)": {
          flexDirection: "row",
        },
      }}
    >
      <Box
        p={5}
        sx={{ display: "flex", position: "fixed", backgroundColor: "#222" }}
      >
        <span component="a" href="tel:5127690544" sx={{ cursor: "pointer" }}>
          512-769-0544
        </span>
        <span
          component="a"
          href="mailto:evelyn@odremansdobermans.com"
          sx={{ cursor: "pointer" }}
        >
          evelyn@odremansdobermans.com
        </span>
        <span>By appointment only</span>
        <span>15101 Chaparral Dr. Leander TX 78641</span>
        <span>&copy; Little Sheepdog Properties 2023</span>
      </Box>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.480057694476!2d-97.96537968451189!3d30.592219981686245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b26265c4bab9f%3A0x12d1d00952203b6d!2s15101%20Chaparral%20Dr%2C%20Leander%2C%20TX%2078641!5e0!3m2!1sen!2sus!4v1673614148879!5m2!1sen!2sus"
          width="450"
          height="300"
          sx={{ border: 0, right: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Footer;
