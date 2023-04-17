function isNotIncludeMovie(moviesArr, id) {
  const isNotInclude = moviesArr.find(movie => movie.id === id) === undefined ? true : false;

  return !!(moviesArr.length === 0 || isNotInclude);
}

export default isNotIncludeMovie;
