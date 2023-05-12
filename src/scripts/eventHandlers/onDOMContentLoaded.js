import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import MoviesService from '../API/MoviesService';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import loader from '../loader';
import renderMovieMarkup from '../renderMovieMarkup';

const { trendingEl, modalBackdropEl } = getDOMRefs();
const {
  GENRES_STORAGE_KEY,
  CURRENT_PAGE_MOVIES_STORAGE_KEY,
  QUEUE_STORAGE_KEY,
  WATCHED_STORAGE_KEY,
  HOME_PAGE_MOVIES,
} = GET_CONSTANTS();

function onDOMContentLoaded() {
  if ($localStorage.get(WATCHED_STORAGE_KEY) === undefined || $localStorage.get(QUEUE_STORAGE_KEY) === undefined) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }

  loader.show();
  modalBackdropEl.style.display = 'flex';

  MoviesService.fetchGenres()
    .then(genresArr => {
      $localStorage.save(GENRES_STORAGE_KEY, genresArr);
    })
    .catch(console.error);

  MoviesService.fetchTrending()
    .then(trendingDataArr => {
      $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);
      $localStorage.save(HOME_PAGE_MOVIES, trendingDataArr);

      renderMovieMarkup(trendingEl, createMovieItemMarkup(trendingDataArr));
      loader.hide();
    })
    .catch(console.error);
}

export default onDOMContentLoaded;