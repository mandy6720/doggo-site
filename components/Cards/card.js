import { Box, Avatar } from "@mui/material";

const Card = (name, ltr = true, text, img) => {
  return (
    <Box id={name} className="card" spacing={2}>
      <Box component="h2" variant="h4">
        <h2 id={name}>{name}</h2>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar
          variant="circular"
          src={img || "images/genericdobie.png"}
          sx={{ width: 200, height: 200 }}
        />
        {text}
      </Box>
    </Box>
  );
};

export default Card;
