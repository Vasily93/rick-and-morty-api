import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterEmenet = characters.map(({ image, name, status, species }) => {
    return (
      <li>
        <Character
          image={image}
          name={name}
          status={status}
          species={species}
        />
      </li>
    );
  });

  return (
    <ul>
      {characterEmenet}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
