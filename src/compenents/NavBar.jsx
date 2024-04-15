import React from 'react';

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div className="nav-bar">
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

export default NavBar;
