import { Autoplay, Navigation, Swiper } from 'swiper';
import '../../node_modules//swiper/swiper-bundle.css';

import MoviesService from '../API/MoviesService';
import renderMovieMarkup from '../helpers/renderMovieMarkup';
import GET_CONSTANTS from './GET_CONSTANTS';
import getRefs from './getRefs';
import isMovieNotInStorage from './isMovieNotInStorage';
import createMovieDetailsMarkup from './markup/createMovieDetailsMarkup';
import modal from './modal';

const { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const trendingSlider = new Swiper('.trending__slider', {
  modules: [Navigation, Autoplay],
  speed: 1100,
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

trendingSlider.on('click', e => {
  const id = +e.clickedSlide.attributes['data-movie-id'].value;
  MoviesService.fetchDetails(id)
    .then(details => {
      modal.show();

      refs.modalQueueLabel.textContent = isMovieNotInStorage(
        QUEUE_STORAGE_KEY,
        id
      )
        ? 'Add to queue'
        : 'Remove  queued';

      refs.modalWatchedLabel.textContent = isMovieNotInStorage(
        WATCHED_STORAGE_KEY,
        id
      )
        ? 'Add to watched'
        : 'Remove  watched';

      renderMovieMarkup(refs.modalMovie, createMovieDetailsMarkup(details));
    })
    .catch(console.error);
});
export default trendingSlider;
