const setMovieDetails = detailsArr => {
  const imgSource = `https://image.tmdb.org/t/p/w400/${detailsArr.poster_path}`;
  const rating = detailsArr.vote_average.toString().slice(0, 3);
  const popularity = detailsArr.popularity.toFixed(1);

  document.querySelector('.modal__content-item').setAttribute('data-id', detailsArr.id);
  document.querySelector('.modal__img').src = imgSource;
  document.querySelector('.modal__img').alt = detailsArr.original_title;
  document.querySelector('.modal-info__title').textContent = detailsArr.title;
  document.querySelector('.modal-info__votes-number').textContent = rating;
  document.querySelector('.modal-info__popularity-number').textContent = popularity;
  document.querySelector('.modal-info__original-title-name').textContent = detailsArr.original_title;
  document.querySelector('.modal-about__descr').textContent = detailsArr.overview;

  return '';
};

export default setMovieDetails;
