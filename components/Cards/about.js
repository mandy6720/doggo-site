import { Box, Avatar } from "@mui/material";

const About = (name, ltr = true, id, img) => {
  return (
    <Box id="about" className="card" spacing={2}>
      <Box component="h2" id="about">
        About Us
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200 }}
        />
        <Box sx={{ paddingLeft: "24px" }}>
          Our goal as a professional breeder is simple, to deliver American
          Dobermans with the highest standard of quality to new owners. In order
          to make such a commitment in raising pups for new homes, we made a
          promise. The promise made is to ensure that with love and compassion,
          these pups will be properly raised. The responsibility of bringing
          fragile lives into the world is a lifelong commitment from the
          Odremans. As we graduate a puppy from the litter to new families, we
          make it our MISSION to always be a single solution resource to inform,
          guide, and teach new members of our family!
        </Box>
      </Box>
    </Box>
  );
};

export default About;
