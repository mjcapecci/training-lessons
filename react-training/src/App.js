import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageSearch from './components/ImageSearch';

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
      <ImageSearch />
    </div>
  );
}

export default App;
