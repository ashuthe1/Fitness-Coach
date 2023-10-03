import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard';
import ExercisePagination from '../ExercisePagination';


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // get current exercises by calculating the indices of the first and last exercises
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1700, behavior: 'smooth' });
  }

  // Whenever user clicks on a bodyPart on the horizontal scrollbar, update ExerciseCards
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // check if all exercises or a specific body part
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setCurrentPage(1); // reset to page one every time we switch to a new set of bodyCards
      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart])

  return (
    <Box id="exercises"
      sx={{ mt: {lg: '50px '}}}
      mt="25px"
      p="20px"
    >
      <Typography variant="h3" mb="45px">
        Showing Results
      </Typography>

      <ExercisePagination 
        exercises={exercises} 
        exercisesPerPage={exercisesPerPage} 
        currentPage={currentPage} 
        paginate={paginate}
        marginAmt="50px" // margin bottom (mb)
      />

      <Stack 
      direction="row" 
      sx={{ gap: { lg: '110px', xs: '50px'}}}
      flexWrap="wrap"
      justifyContent="center"
      > 
        {/* Display exercises or "No Results Found" text */}
        { currentExercises.length !== 0 ? currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )) 
        : 
        <Typography variant="h5">
          No Results Found
        </Typography>     
        }
      </Stack>

      <ExercisePagination 
        exercises={exercises} 
        exercisesPerPage={exercisesPerPage} 
        currentPage={currentPage} 
        paginate={paginate}
        marginAmt="100px"
        mt
      />
    </Box>
  )
}

export default Exercises