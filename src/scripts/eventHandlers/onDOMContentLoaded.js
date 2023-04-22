import GET_CONSTANTS from '../ GET_CONSTANTS';
import FetchMovie from '../FetchMovie';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const fetchMovie = new FetchMovie();
const dom = getDOMRefs();
const {
  GENRES_STORAGE_KEY,
  CURRENT_PAGE_MOVIES_STORAGE_KEY,
  QUEUE_STORAGE_KEY,
  WATCHED_STORAGE_KEY,
  HOME_PAGE_MOVIES,
} = GET_CONSTANTS();

function onDOMContentLoaded() {
  fetchMovie.genres().then(genresArr => $localStorage.save(GENRES_STORAGE_KEY, genresArr));
  fetchMovie.trending().then(trendingDataArr => {
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);
    $localStorage.save(HOME_PAGE_MOVIES, trendingDataArr);

    const movieItemsMarkup = createMovieItemMarkup(trendingDataArr);

    renderMovieMarkup(dom.trending, movieItemsMarkup);
  });

  if ($localStorage.get(WATCHED_STORAGE_KEY) === undefined || $localStorage.get(QUEUE_STORAGE_KEY) === undefined) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }
}

export default onDOMContentLoaded;
