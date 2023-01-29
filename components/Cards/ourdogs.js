import { Box, Avatar } from "@mui/material";

const OurDogs = (name, ltr = true, id, img) => {
  return (
    <Box id="ourdogs" className="card" spacing={2}>
      <Box component="h1" id="about">
        Our Dogs
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        p={1}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
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
