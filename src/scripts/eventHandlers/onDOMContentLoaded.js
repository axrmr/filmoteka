import MoviesService from '../../API/MoviesService';
import $localStorage from '../../helpers/$localStorage';
import Loader from '../../helpers/Loader';
import displayElemStyle from '../../helpers/displayElemStyle';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';

import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';

const {
  GENRES_STORAGE_KEY,
  CURRENT_PAGE_MOVIES_STORAGE_KEY,
  QUEUE_STORAGE_KEY,
  WATCHED_STORAGE_KEY,
  HOME_PAGE_MOVIES,
} = GET_CONSTANTS();
const refs = getRefs();
const popcornLoader = new Loader({
  el: refs.popcornLoader,
  className: 'visible',
});

async function onDOMContentLoaded() {
  const genres = [];

  if (
    $localStorage.get(WATCHED_STORAGE_KEY) === undefined ||
    $localStorage.get(QUEUE_STORAGE_KEY) === undefined
  ) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }

  displayElemStyle('flex', refs.modalBackdrop);
  refs.homeBtn.classList.toggle('current');
  popcornLoader.show();

  try {
    genres.push(await MoviesService.fetchGenres());
    $localStorage.save(GENRES_STORAGE_KEY, genres);
  } catch (error) {
    $localStorage.save(GENRES_STORAGE_KEY, []);
    console.log(error.message);
  }

  try {
    const trendingArr = await MoviesService.fetchTrending();
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingArr);
    $localStorage.save(HOME_PAGE_MOVIES, trendingArr);

    renderMovieMarkup(
      refs.trending,
      createMovieItemMarkup(trendingArr, genres)
    );
  } catch (error) {
    console.error(error.message);
  }

  popcornLoader.hide();
}

export default onDOMContentLoaded;
