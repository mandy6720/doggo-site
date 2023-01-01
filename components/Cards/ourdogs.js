import { Box, Avatar } from "@mui/material";

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
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200 }}
        />
      </Box>
    </Box>
  );
};

export default OurDogs;
