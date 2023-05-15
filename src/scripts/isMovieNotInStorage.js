import $localStorage from './$localStorage';

const isMovieNotInStorage = (storageKey, movieId) => {
  if (!movieId) return;

  const moviesArr = $localStorage.get(storageKey);
  const isNotInStor =
    moviesArr.find(movie => movie.id === movieId) === undefined ? true : false;

  return !!(moviesArr.length === 0 || isNotInStor);
};

export default isMovieNotInStorage;
