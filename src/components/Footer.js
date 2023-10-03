import React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px"> 
        <Stack direction="row" alignItems="center">
          <img src={Logo} alt="logo" width="60px" height="60px" />

          <Typography ml="25px" variant="h5" fontWeight="600">
            Fitness Coach
          </Typography>
        </Stack>
        
        <Box>
          <Typography variant="h5" mt="5px" mb="25px">
            Made with &#9829; by Ashutosh Gautam
          </Typography>

          <Stack direction="row" pb="40px" fontSize="18px" justifyContent="space-between">
            <Link href="https://www.linkedin.com/in/ashuthe1/" target="_blank" underline="hover" rel="noopener">
              LinkedIn
            </Link>
            
            <Link href="https://ashutoshgautam.dev" target="_blank" underline="hover" rel="noopener">
              Portfolio Website
            </Link>
          </Stack>
        </Box>

      </Stack>
    </Box>
  )
}

export default Footer