import GET_CONSTANTS from './ GET_CONSTANTS';
import $localStorage from './$localStorage';
import filterGenres from './filterGenres';

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();
const arrGenresName = $localStorage.get(GENRES_STORAGE_KEY);

const createMovieItemMarkup = dataArr => {
  return dataArr
    .map(movie => {
      const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      const name = movie.title || movie.name;
      const genres = filterGenres(arrGenresName, movie.genre_ids).slice(0, 2).join(', ');
      const releaseDate = movie.release_date ? (movie.release_date || movie.first_air_date).slice(0, 4) : '';
      const rating = movie.vote_average.toString().slice(0, 3);
      return `
      <div class="movies__item" data-movies-item data-movie-id="${movie.id}">
         <img class="movies__img" src="${poster}" alt="${name}" width="400" height="300"/>
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
