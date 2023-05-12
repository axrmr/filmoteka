import $localStorage from './$localStorage';

const isMovieNotInStorage = (storageKey, movieId) => {
  const moviesArr = $localStorage.get(storageKey);
  const isNotInclude = moviesArr.find(movie => movie.id === movieId) === undefined ? true : false;

  return !!(moviesArr.length === 0 || isNotInclude);
};

export default isMovieNotInStorage;
