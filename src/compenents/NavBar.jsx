import React from 'react';

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div className="nav-bar">
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => setPokemonIndex(index)}
          className={index === pokemonIndex ? 'active' : ''}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;