import { Avatar } from '@mui/material';

const Card  = (name, ltr=true ) => {

  return (<section >
    <Avatar variant='circular' src="../../public/images/generic dobie.png" />
    <h1 id="about">About Us</h1>
  <span sx={{paddingTop: "16px"}}> "Our goal as a professional breeder is simple, to deliver American Dobermans with the highest standard of quality to new 
  owners. In order to make such a commitment in raising pups for new homes, we made a promise. The promise made is to ensure that 
  with love and compassion, these  pups will be properly raised. The responsibility of bringing fragile lives into the world is a 
  lifelong commitment from the Odremans. As we graduate a puppy from the litter to new families, we make it our MISSION to always 
  be a single solution resource to inform, guide, and teach new members of our family!"</span></section>)
}

export default Card
