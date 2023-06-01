import filterGenres from '../../helpers/filterGenres';

const createPopularMarkup = popular => {
  return popular
    .map(movie => {
      const genres = filterGenres(movie.genre_ids).slice(0, 2).join(', ');

      return `
        <div class="popular__item" 
             data-movies-item 
             data-movie-id="${movie.id}"
          >
            <img class="popular__img"
                src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" 
                alt="${movie.title || movie.name}" width="342" height="400"
            />
           
            <div class="movie-info">
              <h3 class="movie-info__title" 
                title='${movie.title || movie.name}'
                >${movie.title || movie.name}
              </h3>
              <div class="movie-info__inner">
                <div class="movie-info__genres-wrapp">
                  <span class="movie-info__genres" title='${genres}'>${genres}</span>
                  <span class="movie-info__year">| ${
                    movie.release_date
                      ? (movie.release_date || movie.first_air_date).slice(0, 4)
                      : ''
                  }
                  </span>
                </div>
                  <span class="movie-info__rating">${movie.vote_average
                    .toString()
                    .slice(0, 3)}
                  </span>
              </div>
            </div>
        </div>
    `;
    })
    .join('');
};

export default createPopularMarkup;
