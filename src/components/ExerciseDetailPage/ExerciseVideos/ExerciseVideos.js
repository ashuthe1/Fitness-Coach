import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './ExerciseVideos.css';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  if (!exerciseVideos.length)
    return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'} }} p="20px" mb="50px">
      <Typography variant="h3" mb="33px" fontWeight="600">
        Watch <span style={{ color: '#ff2625', textTransform: "capitalize" }}>{name}</span> Exercise Videos
      </Typography>

      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
      sx={{
        flexDirection: { lg: 'row'}, 
        gap: { lg: '110px', xs: '0'}
      }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a 
            key={index} 
            className="exercise-video" 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
            target="_blank"
            rel="noreferrer" // usually use this with _blank
            
          >
            <img height="217px" src={item.video.thumbnails[0].url} alt={item.video.title} />
            
            <Box>
              <Typography variant="h5" color="#000" fontWeight="600">
                {item.video.title}
              </Typography>
              
              <Typography variant="h6" color="#000">
                By: {item.video.channelName}
              </Typography>

              <Typography variant="h6" color="#000">
                Published: <i>{item.video.publishedTimeText}</i>
              </Typography>

              <Typography variant="h6" color="#000">
                <i>{item.video.viewCountText}</i>
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos