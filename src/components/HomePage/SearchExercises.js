import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar';

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // When loading the page, display all body parts in the HorizontalScrollbar component
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, []);

  // When user clicks on the Search button after inputting something into the search bar
  const handleSearch = async () => {
    if (search) {
      // remove special characters and spaces (using Regex)
      const filteredSearch = search.replace(/[^A-Z]+/ig, "");

      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      // encompass multiple ways user searches for something. Object attribute names are given in the fetched data
      const searchedExercises = exercisesData.filter((exercise) => {
        // remove any special characters and spaces so we can maximize search matching
        const filterName = exercise.name.toLowerCase().replace(/[^A-Z]+/ig, "");
        const filterTarget = exercise.target.toLowerCase().replace(/[^A-Z]+/ig, "");
        const filterBodyPart = exercise.bodyPart.toLowerCase().replace(/[^A-Z]+/ig, "");
        const filterEquipment = exercise.equipment.toLowerCase().replace(/[^A-Z]+/ig, "");

        // these return true or false, if it is true, append current exercise object
        return (filterName.includes(filteredSearch)
        || filterTarget.includes(filteredSearch) 
        || filterBodyPart.includes(filteredSearch)
        || filterEquipment.includes(filteredSearch)
       );
      });

      setSearch(""); // clear search box
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack id="search-exercises" alignItems="center" mt="150px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '30px' }}} mb="25px" textAlign="center">
        Awesome and Effective <br /> 
        Exercises You Should Know
      </Typography>

      {/* EXERCISE HORIZONTAL SCROLLBAR (Back, Cardo, etc) */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>

      <Box position="relative" mt="75px">
        <TextField 
          sx={{ 
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
           }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button 
          className="search-btn" 
          sx={{ 
          bgcolor: '#FF2625', 
          color: '#fff', 
          textTransform: 'none', 
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0'
          }}

          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises