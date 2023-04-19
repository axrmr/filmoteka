import $localStorage from './localStorage';

function saveSelectedMovieToStorage({ key, movieObj, movieId }) {
  const arr = $localStorage.get(key);

  isNotIncludeMovie(arr, movieId) && arr.push(movieObj) && $localStorage.save(key, arr);
}

function isNotIncludeMovie(moviesArr, id) {
  const isNotInclude = moviesArr.find(movie => movie.id === id) === undefined ? true : false;

  return !!(moviesArr.length === 0 || isNotInclude);
}

export default saveSelectedMovieToStorage;
