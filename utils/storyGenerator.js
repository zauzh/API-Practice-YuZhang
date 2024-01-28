// src/utils/storyGenerator.js
import { getRandomSuperhero } from "./superheroService";

const generateStory = async () => {
  try {
    const hero = await Promise.all([getRandomSuperhero()]);

    const superhero = hero.name;

    const newStory = `Once upon a time, ${superhero} established an Army to save the world. 
    They have fighted with the worst wars with the devil and finally save the earth. `;

    return newStory;
  } catch (error) {
    console.error("Error generating superhero story:", error);
    throw error;
  }
};

export { generateStory };
