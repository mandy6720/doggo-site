import { Box, Avatar, Typography } from "@mui/material";

const OurDogs = (name, ltr = true, id, img) => {
  return (
    <Box id="ourdogs" className="card" spacing={2}>
      <Box component="h2" id="about">
        Our Dogs
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} p={1}>
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200, marginRight: "50px" }}
        />
        <h3>Ladies</h3>
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200 }}
        />
        <h3>Gents</h3>
      </Box>
    </Box>
  );
};

export default OurDogs;
