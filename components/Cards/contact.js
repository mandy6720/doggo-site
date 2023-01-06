import { Typography, Box } from "@mui/material";
import React from "react";
import Form from "../Form/";

const Contact = () => {
  return (
    <>
      <Box id="contact" className="card" spacing={2}>
        <Typography>
          <h1>Contact Us</h1>
        </Typography>
      </Box>
      <Form />
      <Box></Box>
    </>
  );
};

export default Contact;
