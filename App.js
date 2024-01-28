// src/App.jsx
import SuperheroStory from "./components/SuperheroStory";

function App() {
  const handleGenerateStory = () => {
    // Logic to generate the superhero story goes here.
    console.log("Generating superhero story...");
  };

  return (
    <div>
      <h1>Superhero Story Generator</h1>
      <SuperheroStory />
      <button onClick={handleGenerateStory}>Generate Superhero Story</button>
    </div>
  );
}

export default App;
