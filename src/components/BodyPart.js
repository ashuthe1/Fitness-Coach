import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack 
    type="button" 
    alignItems="center" 
    justifyContent="center" 
    className="bodyPart-card"
    sx={{   
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px' }}

    onClick={() => {
        setBodyPart(item);
        window.scroll({top: 1700, left: 100, behavior: 'smooth'});
    }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart