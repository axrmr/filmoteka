import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import MoviesService from '../API/MoviesService';
import Loader from '../Loader';
import createMovieItemMarkup from '../createMovieItemMarkup';
import displayElemStyle from '../displayElemStyle';
import getDOMRefs from '../getDOMRefs';
import renderMovieMarkup from '../renderMovieMarkup';

const {
  GENRES_STORAGE_KEY,
  CURRENT_PAGE_MOVIES_STORAGE_KEY,
  QUEUE_STORAGE_KEY,
  WATCHED_STORAGE_KEY,
  HOME_PAGE_MOVIES,
} = GET_CONSTANTS();
const { trendingEl, modalBackdropEl, popcornLoaderEl, homeBtnEl } =
  getDOMRefs();
const popcornLoader = new Loader({ el: popcornLoaderEl, className: 'visible' });

function onDOMContentLoaded() {
  if (
    $localStorage.get(WATCHED_STORAGE_KEY) === undefined ||
    $localStorage.get(QUEUE_STORAGE_KEY) === undefined
  ) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }

  popcornLoader.show();

  displayElemStyle('flex', modalBackdropEl);

  homeBtnEl.classList.toggle('current');

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

      popcornLoader.hide();
    })
    .catch(console.error);
}

export default onDOMContentLoaded;
