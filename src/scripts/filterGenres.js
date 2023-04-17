import GET_CONSTANTS from './ getConstants';
import $localStorage from './localStorage'; // save, get, remove - methods

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();

const filterGenres = arrGenresId => {
  const genresName = [];
  const arrGenresName = $localStorage.get(GENRES_STORAGE_KEY);

  arrGenresId.forEach(elem =>
    arrGenresName.filter(genre => genre.id === elem).forEach(genre => genresName.push(genre.name))
  );
  return genresName.join(', ');
};

export default filterGenres;
