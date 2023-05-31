import filterGenres from '../../helpers/filterGenres';
const createTrendingMarkup = trending => {
  return trending
    .map(movie => {
      const genres = filterGenres(movie.genre_ids).slice(0, 2).join(', ');
      return `
          <div class="swiper-slide trending__item" 
               data-trending-item 
               data-movie-id="${movie.id}"
            
               >
            <img class="trending__img"
                 src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" 
                 alt="${movie.title || movie.name}" width="343" height="400"
            />
           
            <div class="movie-info trending-info">
            <h3 class="movie-info__title trending-info__title" 
                title='${movie.title || movie.name}'
                >
                 ${movie.title || movie.name}
            </h3>
              <span class="movie-info__genres trending-info__genres" title='${genres}'>${genres}</span>
              <span class="movie-info__year trending-info__year">| ${
                movie.release_date
                  ? (movie.release_date || movie.first_air_date).slice(0, 4)
                  : ''
              }
              </span>
              <span class="movie-info__rating trending-info__rating">${movie.vote_average
                .toString()
                .slice(0, 3)}
              </span>
            </div>
          </div>
      `;
    })
    .join('');
};

export default createTrendingMarkup;
