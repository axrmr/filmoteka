import GET_CONSTANTS from '../ getConstants';
import createMovieItemMarkup from '../createMovieItemMarkup';
import fetchGenres from '../fetchGenres';
import fetchTrending from '../fetchTrending';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const dom = getDOMRefs();
const { GENRES_STORAGE_KEY, CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();

function onDOMContentLoaded() {
  fetchGenres().then(genresArr => $localStorage.save(GENRES_STORAGE_KEY, genresArr));
  fetchTrending().then(trendingDataArr => {
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);
    const movieItemsMarkup = createMovieItemMarkup(trendingDataArr);

    renderMovieMarkup(dom.trending, movieItemsMarkup);
  });
  if ($localStorage.get(WATCHED_STORAGE_KEY) === undefined || $localStorage.get(QUEUE_STORAGE_KEY) === undefined) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }
}

export default onDOMContentLoaded;
