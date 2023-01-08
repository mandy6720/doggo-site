import { Box, Avatar } from "@mui/material";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

const About = (name, ltr = true, id, img) => {
  return (
    <Box id="about" className="card" spacing={2}>
      <Box component="h1" id="about">
        About Us
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200 }}
        />
        <Box
          sx={{
            paddingLeft: "24px",
            "@media screen and (min-width: 450px)": {
              flexDirection: "column",
            },
            display: "flex",
          }}
        >
          Our goal as a professional breeder is simple. It’s to deliver American
          Dobermans of the highest standard of quality to new owners. In order
          to make such a commitment, we are focused on a simple promise--that
          all of our pups will be properly raised with love and compassion.
          <br />
          The responsibility that comes with bringing these fragile young lives
          into the world is a lifelong commitment from us at Odremans. As we
          graduate a puppy from the litter to a new family, we make it our
          MISSION to always be a single-solution resource to inform, guide, and
          teach each new member of our ever-growing family.""
        </Box>
      </Box>
    </Box>
  );
};

export default About;
