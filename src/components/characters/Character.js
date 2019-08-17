import React from 'react';
import PropTypes from 'prop-types';

function Character({ image, name, status, species }) {
  return (
    <section>
      <img src={image}/>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;
