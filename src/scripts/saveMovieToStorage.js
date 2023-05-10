import $localStorage from './localStorage';

const saveMovieToStorage = (key, movieObj) => {
  const arr = $localStorage.get(key);

  arr.push(movieObj) && $localStorage.save(key, arr);
};

export default saveMovieToStorage;
