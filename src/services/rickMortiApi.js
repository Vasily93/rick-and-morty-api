export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => {
      if(!res.ok) throw 'not  okay';

      return res.json();
    });
};
