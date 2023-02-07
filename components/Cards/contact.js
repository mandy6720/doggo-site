import { Typography, Box } from "@mui/material";
import React from "react";
import Form from "../Form/form";

const Contact = () => {
  return (
    <>
      <Box id="contact" className="card" spacing={2}>
        <Typography>
          <h1>Contact Us</h1>
          <p></p>
        </Typography>
        <Box>
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
      </Box>
    </>
  );
};

export default Contact;

<Box p={5}>
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
</Box>;
