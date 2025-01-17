import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { border: '4px solid #1156FF', background: '#fff', borderRadius: '20px', width: '200px', height: '200px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderRadius: '20px', width: '200px', height: '200px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography fontSize="20px" fontWeight="bold" fontFamily="sans-serif" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
