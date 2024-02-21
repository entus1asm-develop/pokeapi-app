import React, { useState } from 'react';
import PokemonInfo from './PokemonInfo';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokemon name"
        value={pokemonName}
        onChange={handleChange}
      />
      {pokemonName && <PokemonInfo pokemonName={pokemonName} />}
    </div>
  );
};

export default PokemonSearch;