import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from '../HorizontalScrollbar';
import Loader from '../Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
      <Typography variant="h3" mb={5} fontWeight="600" p="20px">
        Similar <span style={{ color: '#ff2625' }}>Muscle Group</span> Exercises
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative', mb: '50px' }}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />
        }
      </Stack>

      <Typography variant="h3" mb={5} fontWeight="600" p="20px">
        Similar <span style={{ color: '#ff2625' }}>Equipment</span> Exercises
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} /> : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises