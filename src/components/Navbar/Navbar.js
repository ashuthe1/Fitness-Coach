import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import './Navbar.css';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      sx={{ gap: {sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent:'none'}} 
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className="home-link">Home</Link>
        <a href="#exercises" className="exercises_anchor">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar