import filterGenres from './filterGenres';

const createMovieItemMarkup = dataArr => {
  return dataArr
    .map(movie => {
      const id = movie.id;
      const poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
      const name = movie.title || movie.name;
      const genres = filterGenres(movie.genre_ids);
      const releaseDate = movie.release_date ? (movie.release_date || movie.first_air_date).slice(0, 4) : '';
      const rating = movie.vote_average.toString().slice(0, 3);

      return `
      <div class="movies__item" data-movies-item data-id="${id}">
         <img class="movies__img" src="${poster}" alt="${name}" />
         <div class="movies-info">
          <h3 class="movies-info__title">${name}</h3>
          <div>
           <span class="movies-info__genre">${genres}</span>
           <span class="movies-info__year">${releaseDate}</span>
           <span class="movies-info__rating">${rating}</span>
          </div>
        </div>
      </div>
    `;
    })
    .join('');
};

export default createMovieItemMarkup;
