import { useState, useEffect } from "react";
import { generateStory } from "../utils/storyGenerator";

const SuperheroStory = () => {
  const [story, setStory] = useState("");
  const [webWorkerResult, setWebWorkerResult] = useState("");
  const apiKey = import.meta.env.VITE_REACT_APP_SUPERHERO_API_KEY; // Access the API key here

  const getRandomSuperheroes = async () => {
    try {
      const newStory = await generateStory();
      setStory(newStory);
    } catch (error) {
      console.error("Error fetching superhero data:", error);
    }
  };

  useEffect(() => {
    const worker = new Worker(new URL("./webWorker.jsx", import.meta.url));

    worker.postMessage({ apiKey }); // Pass the API key to the worker

    worker.onmessage = (event) => {
      const superheroData = event.data;
      setWebWorkerResult(`Web Worker Result: ${superheroData.name}`);
    };

    return () => {
      worker.terminate();
    };
  }, [apiKey]); // Include apiKey in the dependencies array

  const fetchSuperheroInWorker = (id) => {
    const worker = new Worker(new URL("./webWorker.js", import.meta.url));

    worker.postMessage({ id, apiKey }); // Pass the API key to the worker
  };

  return (
    <div>
      <button onClick={getRandomSuperheroes}>Generate Story</button>
      <p>{story}</p>
      <button onClick={() => fetchSuperheroInWorker(1)}>
        Fetch Superhero in Web Worker
      </button>
      <p>{webWorkerResult}</p>
    </div>
  );
};

export default SuperheroStory;
