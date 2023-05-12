const filterGenres = (genresArr, genresIdArr) => {
  const genresName = [];

  genresIdArr.forEach(elem =>
    genresArr.filter(genre => genre.id === elem).forEach(genre => genresName.push(genre.name))
  );
  return genresName;
};

export default filterGenres;
