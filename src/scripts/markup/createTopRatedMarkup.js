const createTopRatedMarkup = topRated => {
  return topRated
    .map(movie => {
      return `
        <div class="popular__item" 
             data-movies-item 
             data-movie-id="${movie.id}"
          >
            <img class="popular__img"
                src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" 
                alt="${movie.title || movie.name}" width="290" height="430"
            />
        </div>
    `;
    })
    .join('');
};

export default createTopRatedMarkup;
