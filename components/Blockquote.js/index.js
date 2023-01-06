import React from "react";
import { Box, Typography } from "@mui/material";
import { Flare } from "@mui/icons-material";

const Blockquote = (text) => {
  return (
    <Box
      padding={2}
      sx={{
        textAlign: "center",
        marginTop: "1em",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>
        <h2>
          "Finding a cute puppy is easy - finding a cute puppy that is healthy,
          happy and socialized -- from a responsible, reputable and honest
          breeder is not so easy"
        </h2>
      </Typography>
    </Box>
  );
};

export default Blockquote;
