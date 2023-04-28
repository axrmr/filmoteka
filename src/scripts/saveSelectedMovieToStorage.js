import $localStorage from './localStorage';

const isNotIncludeMovie = (moviesArr, id) => {
  const isNotInclude = moviesArr.find(movie => movie.id === id) === undefined ? true : false;

  return !!(moviesArr.length === 0 || isNotInclude);
};

const saveSelectedMovieToStorage = ({ key, movieObj, movieId }) => {
  const arr = $localStorage.get(key);

  isNotIncludeMovie(arr, movieId) && arr.push(movieObj) && $localStorage.save(key, arr);
};

export default saveSelectedMovieToStorage;
