const showMovieDetailsModal = detailsArr => {
  const rating = detailsArr.vote_average.toString().slice(0, 3);
  const popularity = detailsArr.popularity.toFixed(1);
  const genre = detailsArr.genres.map(genre => genre.name).join(', ');

  return `<div class="modal__content-item" data-modal-content-item data-id="${detailsArr.id}" >
            <img class="modal__img" src="https://image.tmdb.org/t/p/w400/${detailsArr.poster_path}" alt="${detailsArr.original_title}" />
            <div class="modal-info">
              <h3 class="modal-info__title">${detailsArr.original_title}</h3>
              <ul class="modal-info__list">
                <li class="modal-info__item">
                  <span class="modal-info__votes-title">Vote / Votes</span>
                  <span class="modal-info__votes-number">${rating}</span>
                </li>
                <li class="modal-info__item">
                  <span class="modal-info__popularity-title">Popularity</span>
                  <span class="modal-info__popularity-number">${popularity}</span>
                </li>
                <li class="modal-info__item">
                  <span class="modal-info__original-title">Original title</span>
                  <span class="modal-info__original-title-name">${detailsArr.original_title}</span>
                </li>
                <li class="modal-info__item">
                  <span class="modal-info__genre-title">Genre </span>
                  <span class="modal-info__genre-name">${genre} </span>
                </li>
              </ul>
              <div class="modal-about">
                <p class="modal-about__title">About</p>
                <p class="modal-about__descr">${detailsArr.overview}</p>
              </div>
            </div>
    `;
};

export default showMovieDetailsModal;
