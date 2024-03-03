import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#cedcff">
    <Stack gap="10px" sx={{display:'flex',flexDirection:'row', alignItems: 'center', justifyContent:'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
      <Typography color="#1156FF" fontWeight="400" fontSize="22px">GymX</Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by <a style={{ textDecoration: 'none'}} target='_blank' href="https://github.com/raghunath704">Raghunath</a></Typography>
  </Box>
);

export default Footer;
