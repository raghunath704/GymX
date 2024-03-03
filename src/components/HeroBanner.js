import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => (
  <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#1156FF" fontWeight="600" fontSize="40px">GymX</Typography>

    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>

    <Typography 
    fontSize="20px" 
    fontFamily="sans-serif"
    >
      Check out the most effective exercises personalized to you
    </Typography>

    <Stack>
      <a href="#exercises" style={{ fontFamily:"sans-serif",marginTop: '40px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#1156FF', padding: '14px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '10px' }}>Explore Exercises</a>
    </Stack>

    <Typography fontWeight={600} color="#1156FF" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>

    <img  src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
