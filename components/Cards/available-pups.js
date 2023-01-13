import { Typography, Box } from "@mui/material";
import React from "react";

const AvailablePups = () => {
  return (
    <Box id="ourdogs" className="card" spacing={2}>
      <Typography id="availablepups">
        <h1>Available Pups</h1>
        Coming in Spring!
      </Typography>
    </Box>
  );
};

export default AvailablePups;
