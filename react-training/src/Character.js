import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = ({ characterInfo }) => {
  const [planetName, setPlanetName] = useState(null);

  const getPlanetName = async (planetUrl) => {
    const response = await axios.get(planetUrl);
    setPlanetName(response.data.name);
  };

  useEffect(() => {
    getPlanetName(characterInfo.homeworld);
  });

  return (
    planetName && (
      <div className='character-container'>
        <p>Name: {characterInfo.name}</p>
        <ul>
          <li>Height: {characterInfo.height}</li>
          <li>Homeworld: {planetName}</li>
        </ul>
      </div>
    )
  );
};

export default Character;
