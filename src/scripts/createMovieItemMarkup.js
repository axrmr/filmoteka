const createMovieItemMarkup = (dataArr, genresArr) => {
  return dataArr
    .map(movie => {
      const id = movie.id;
      const poster = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
      const name = movie.title || movie.name;
      const releaseDate = movie.release_date ? (movie.release_date || movie.first_air_date).slice(0, 4) : '';
      const rating = movie.vote_average.toString().slice(0, 3);
      const res = [];

      genresArr.forEach((genre, idx) => {
        if (genre.id === movie.genre_ids[idx]) {
          res.push(genre.name);
        }
      });

      return `
      <div class="movies__item" data-id="${id}">
         <img class="movies__img" src="${poster}" alt="${name}" />
         <div class="movies-info">
          <h3 class="movies-info__title">${name}</h3>
          <div>
           <span class="movies-info__genre">${res}</span>
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
