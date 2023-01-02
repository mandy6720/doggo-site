import { Box, Avatar, Typography } from "@mui/material";

const OurDogs = (name, ltr = true, id, img) => {
  return (
    <Box id="ourdogs" className="card" spacing={2}>
      <Box component="h2" id="about">
        Our Dogs
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} p={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            background: "pink",
          }}
        >
          <Avatar
            variant="circular"
            src="images/genericdobie.png"
            sx={{ width: 200, height: 200 }}
          />
          <h2>Ladies</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            background: "blue",
          }}
        >
          <Avatar
            variant="circular"
            src="images/genericdobie.png"
            sx={{ width: 200, height: 200 }}
          />
          <h2>Gents</h2>
        </Box>
      </Box>
    </Box>
  );
};

export default OurDogs;
