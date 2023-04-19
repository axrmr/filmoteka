import $localStorage from './localStorage';

function removeSelectedMovieFromStorage(key, id) {
  const arr = $localStorage.get(key);

  $localStorage.save(
    key,
    arr.filter(movie => movie.id !== id)
  );
}

export default removeSelectedMovieFromStorage;
