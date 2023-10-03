import React, { useState } from 'react'
import { Typography } from '@mui/material';

const CurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString(); // initialize time
    const [time, setTime] = useState(currentTime);
   
    const setCurrentTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(setCurrentTime, 1000);
    
    return (
        <Typography mb="5px" fontSize="22px">
            {time}
        </Typography>
    )
}

export default CurrentTime