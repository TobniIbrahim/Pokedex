import React, { useState } from 'react';
import PokemonCard from './compenents/PokemonCard';

const pokemonList = [
  {
    name: 'Bulbizarre',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'Salameche',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'Carapuce',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    name: 'Pikachu',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    name: 'mew',
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div className="app">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button
        onClick={() => setPokemonIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>
      <button
        onClick={() => setPokemonIndex((prevIndex) => Math.min(prevIndex + 1, pokemonList.length - 1))}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
}

export default App;
