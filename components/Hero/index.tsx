import * as React from 'react';
import Box from '@mui/material/Box';

export const HeroImage = (color:string) => {
  return (<Box sx={{background: color || "pink"}}>
    <div className="hero-text">
    <h1>I am John Doe</h1>
    <p>And I'm a Photographer</p>
    <button>Hire me</button>
  </div>
</Box>)
}