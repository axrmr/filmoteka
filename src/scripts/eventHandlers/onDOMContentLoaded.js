import GET_CONSTANTS from '../ GET_CONSTANTS';
import MoviesService from '../API/MoviesService';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../$localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const { trendingEl } = getDOMRefs();
const {
  GENRES_STORAGE_KEY,
  CURRENT_PAGE_MOVIES_STORAGE_KEY,
  QUEUE_STORAGE_KEY,
  WATCHED_STORAGE_KEY,
  HOME_PAGE_MOVIES,
} = GET_CONSTANTS();

function onDOMContentLoaded() {
  MoviesService.fetchGenres()
    .then(genresArr => $localStorage.save(GENRES_STORAGE_KEY, genresArr))
    .catch(console.error);

  MoviesService.fetchTrending()
    .then(trendingDataArr => {
      $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);
      $localStorage.save(HOME_PAGE_MOVIES, trendingDataArr);

      renderMovieMarkup(trendingEl, createMovieItemMarkup(trendingDataArr));
    })
    .catch(console.error);

  if ($localStorage.get(WATCHED_STORAGE_KEY) === undefined || $localStorage.get(QUEUE_STORAGE_KEY) === undefined) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }
}

export default onDOMContentLoaded;
