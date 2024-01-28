// src/utils/superheroService.js
const API_KEY = import.meta.env.VITE_REACT_APP_SUPERHERO_API_KEY;

const getRandomSuperhero = () => {
  return fetch(`https://superheroapi.com/api/${API_KEY}/random`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching random superhero:", error);
      throw error;
    });
};

export { getRandomSuperhero };
