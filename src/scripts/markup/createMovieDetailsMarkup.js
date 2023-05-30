const createMovieDetailsMarkup = detailsArr => {
  const imgSource = `https://image.tmdb.org/t/p/w342/${detailsArr.poster_path}`;
  const votes = detailsArr.vote_average.toString().slice(0, 3);
  const popularity = detailsArr.popularity.toFixed(1);

  return `
      <div class="modal-movie__inner" data-modal-movie-id=${
        detailsArr.id
      } data-modal-movie-inner>
        <img class="modal-movie__img" 
             src=${imgSource} width="400" height="300" 
             alt=${detailsArr.original_title}
        />
        <div class="modal-movie__info">
          <h3 class="modal-movie__title">${detailsArr.title}</h3>
          <ul class="modal-movie__info-list info-list">
            <li class="info-list__item">
              <span class="info-list__title">Vote / Votes</span>
              <span class="info-list__aftertitle info-list__aftertitle--accent">${votes}</span>
            </li>
            <li class="info-list__item">
              <span class="info-list__title">Popularity</span>
              <span class="info-list__aftertitle">${popularity}</span>
            </li>
            <li class="info-list__item">
              <span class="info-list__title">Original title</span>
              <span class="info-list__aftertitle">${
                detailsArr.original_title
              }</span>
            </li>
            <li class="info-list__item">
              <span class="info-list__title">Genre </span>
              <span class="info-list__aftertitle">${detailsArr.genres
                .map(genre => genre.name)
                .slice(0, 3)
                .join(', ')}</span>
            </li>
          </ul>
          <div class="modal-movie__about movie-about">
            <p class="movie-about__title">About</p>
            <p class="movie-about__descr">${detailsArr.overview}</p>
          </div>
        </div>
      </div>
  `;
};

export default createMovieDetailsMarkup;
