import $localStorage from './localStorage';

const removeMovieFromStorage = (key, id) => {
  const arr = $localStorage.get(key);

  $localStorage.save(
    key,
    arr.filter(movie => movie.id !== id)
  );
};

export default removeMovieFromStorage;
