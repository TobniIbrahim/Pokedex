import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
  const { name, imgSrc } = pokemon;

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;