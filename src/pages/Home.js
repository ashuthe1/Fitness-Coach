import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/HomePage/SearchExercises';
import HeroBanner from '../components/HomePage/HeroBanner';
import Exercises from '../components/HomePage/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      r<SearchExercises setExecises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home