require('dotenv').config();

import createMovieItemMarkup from './scripts/createMovieItemMarkup';
import fetchGenres from './scripts/fetchGenres';
import fetchMovieDetails from './scripts/fetchMovieDetails';
import fetchTrending from './scripts/fetchTrending';
import $localStorage from './scripts/localStorage'; // save, get, remove - methods
import renderMovieMarkup from './scripts/renderMovieMarkup';
import searchMovies from './scripts/searchMovie';
import showMovieDetailsModal from './scripts/showMovieDetailsModal';
import showSearchError from './scripts/showSearchError';

const GENRES_LOC_STORAGE_KEY = 'genres';
const TRENDING_LOC_STORAGE_KEY = 'trending';

const dom = {
  trending: document.getElementById('trending'),
  searchForm: document.getElementById('form'),
  modalBackdrop: document.getElementById('backdrop'),
  modal: document.getElementById('modal'),
  modalContent: document.getElementById('modal-content'),
  closeModalBtn: document.getElementById('close-modal'),
};
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
dom.searchForm.addEventListener('submit', onSearchFormSubmit);
dom.trending.addEventListener('click', onTrendingItemClick);
dom.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
dom.modalBackdrop.addEventListener('click', onModalBackdropClick);

function onDOMContentLoaded() {
  fetchGenres().then(genresArr => $localStorage.save(GENRES_LOC_STORAGE_KEY, genresArr));
}

function onSearchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const trimmedSearchQuery = form.searchQuery.value.trim();

  searchMovies(trimmedSearchQuery).then(dataArr => {
    if (!dataArr.length) {
      showSearchError();
      return;
    }
    const genresArr = $localStorage.get(GENRES_LOC_STORAGE_KEY);
    const movieItemsMarkup = createMovieItemMarkup(dataArr, genresArr);

    renderMovieMarkup(dom.trending, movieItemsMarkup);
  });
  e.currentTarget.reset();
}

function onTrendingItemClick(e) {
  if (!e.target.closest('.movies__item')) {
    return;
  }
  const movieId = e.target.closest('[data-id]').dataset.id;

  fetchMovieDetails(movieId).then(data => {
    const movieDetailsMarkup = showMovieDetailsModal(data);
    dom.modalContent.innerHTML = movieDetailsMarkup;
    dom.modalBackdrop.classList.remove('is-visible');
    dom.modal.classList.remove('is-visible');
  });
}

function onCloseModalBtnClick(e) {
  dom.modalBackdrop.classList.add('is-visible');
  dom.modal.classList.add('is-visible');
}

function onModalBackdropClick() {
  this.classList.add('is-visible');
}

fetchTrending().then(trendingDataArr => {
  const genresArr = $localStorage.get(GENRES_LOC_STORAGE_KEY);
  const movieItemsMarkup = createMovieItemMarkup(trendingDataArr, genresArr);

  renderMovieMarkup(dom.trending, movieItemsMarkup);
});
