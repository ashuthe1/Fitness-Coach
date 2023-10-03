import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const ExercisePagination = ({ mt, marginAmt, exercises, exercisesPerPage, currentPage, paginate }) => {
  return (
    <Stack mb={mt ? "0" : marginAmt} mt={mt ? marginAmt : "0"} alignItems="center">
    
    {exercises.length > exercisesPerPage && (
      <Pagination 
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"
      />
    )}
    </Stack>
  )
}

export default ExercisePagination