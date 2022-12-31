import { Box, Avatar } from "@mui/material";

const Card = (name, ltr = true) => {
  return (
    <Box id="about" className="card" spacing={2}>
      <Box component="h2">
        <h1 id="about">About Us</h1>
      </Box>
      <Avatar
        variant="circular"
        src="images/genericdobie.png"
        sx={{ flex: 1, width: 200, height: 200 }}
      />
      <Box sx={{ paddingTop: "16px" }}>
        "Our goal as a professional breeder is simple, to deliver American
        Dobermans with the highest standard of quality to new owners. In order
        to make such a commitment in raising pups for new homes, we made a
        promise. The promise made is to ensure that with love and compassion,
        these pups will be properly raised. The responsibility of bringing
        fragile lives into the world is a lifelong commitment from the Odremans.
        As we graduate a puppy from the litter to new families, we make it our
        MISSION to always be a single solution resource to inform, guide, and
        teach new members of our family!"
      </Box>
    </Box>
  );
};

export default Card;
