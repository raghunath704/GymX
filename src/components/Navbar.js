import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '30px' }, mt: { sm: '20px', xs: '10px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px', margin: '0px 0px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', fontFamily:'sans-serif', color:'#3A1212' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212',fontFamily:'sans-serif' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
