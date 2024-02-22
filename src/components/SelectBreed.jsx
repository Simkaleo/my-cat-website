import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectBreed({ selectedBreed, setSelectedBreed }) {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    const getBreedlist = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const result = await response.json();
        setBreedList(result);
      } catch (error) {
        console.error("Error fetching breed list:", error);
      }
    };

    getBreedlist();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="breed-select-label">Breed</InputLabel>
      <Select
        labelId="breed-select-label"
        id="breed-select"
        value={selectedBreed}
        label="Breed"
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <MenuItem value="" disabled>
          Please select a breed
        </MenuItem>
        {breedList.map((breed) => (
          <MenuItem key={breed.id} value={breed.id}>
            {breed.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectBreed;
