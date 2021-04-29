import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

function App() {
  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    const response = await axios.get('https://swapi.dev/api/people');
    setCharacters(response.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    characters && console.log(characters);
  }, [characters]);

  return (
    <div className='App'>
      {characters &&
        characters.map((character, i) => {
          return <Character key={i} characterInfo={character} />;
        })}
    </div>
  );
}

export default App;
