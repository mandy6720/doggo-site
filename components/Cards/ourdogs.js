import { Box, Avatar } from "@mui/material";

const OurDogs = (name, ltr = true, id, img) => {
  return (
    <Box id="ourdogs" className="card" spacing={2}>
      <Box component="h2" id="about">
        Our Dogs
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar
          variant="circular"
          src="images/genericdobie.png"
          sx={{ width: 200, height: 200 }}
        />
        <Box sx={{ paddingLeft: "24px" }}>
          Borkf lotsa pats heckin angery woofer big ol pupper much ruin diet
          vvv, bork doggo shibe smol doge noodle horse, very jealous pupper what
          a nice floof vvv mlem. Ur givin me a spook much ruin diet many pats he
          made many woofs super chub borkf what a nice floof, borkf mlem woofer
          you are doing me the shock. He made many woofs tungg pats, wow such
          tempt. Heckin angery woofer lotsa pats fat boi puggorino most angery
          pupper I have ever seen puggorino fluffer lotsa pats, very good spot
          borkf you are doing me a frighten heckin good boys and girls pupper
          noodle horse. Shoober woofer thicc doge big ol, boofers many pats.
          Pats smol borking doggo with a long snoot for pats shoober you are
          doing me the shock, blep very taste wow. You are doing me a frighten
          tungg most angery pupper I have ever seen, heckin angery woofer.
        </Box>
      </Box>
    </Box>
  );
};

export default OurDogs;
