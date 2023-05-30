import MoviesService from '../../API/MoviesService';
import $localStorage from '../../helpers/$localStorage';
import Loader from '../../helpers/Loader';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import showElement from '../../helpers/showElement';
import GET_CONSTANTS from '../GET_CONSTANTS';
import getRefs from '../getRefs';
import createPopularMarkup from '../markup/createPopularMarkup';
import createTopRatedMarkup from '../markup/createTopRatedMarkup';
import createTrendingMarkup from '../markup/createTrendingMarkup';
import { swiper } from '../trending-slider';

const {
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
  if (
    $localStorage.get(WATCHED_STORAGE_KEY) === undefined ||
    $localStorage.get(QUEUE_STORAGE_KEY) === undefined
  ) {
    $localStorage.save(WATCHED_STORAGE_KEY, []);
    $localStorage.save(QUEUE_STORAGE_KEY, []);
  }

  showElement(refs.modalBackdrop);
  refs.homeBtn.classList.toggle('current');
  popcornLoader.show();

  try {
    const popularArr = await MoviesService.fetchPopular();
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, popularArr);
    $localStorage.save(HOME_PAGE_MOVIES, popularArr);

    renderMovieMarkup(refs.popularRoot, createPopularMarkup(popularArr));
  } catch (error) {
    console.error(error.message);
  }

  try {
    const trendingArr = await MoviesService.fetchTrending();
    renderMovieMarkup(refs.sliderWrapper, createTrendingMarkup(trendingArr));
    swiper.updateSlides();
  } catch (error) {
    console.log(error.message);
  }

  try {
    const topRatedArr = await MoviesService.fetchTopRated();
    console.log(topRatedArr);
    renderMovieMarkup(refs.heroSlider, createTopRatedMarkup(topRatedArr));
    swiper.updateSlides();
  } catch (error) {
    console.log(error.message);
  }

  popcornLoader.hide();
}

export default onDOMContentLoaded;
