import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import fetchMovieDetails from '../fetchMovieDetails';
import getDOMRefs from '../getDOMRefs';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const dom = getDOMRefs();

function onTrendingItemClick(e) {
  if (!e.target.closest('[data-movies-item]')) {
    return;
  }
  const movieId = e.target.closest('[data-id]').dataset.id;

  fetchMovieDetails(movieId).then(data => {
    dom.modalContent.insertAdjacentHTML('afterbegin', createMovieDetailsMarkup(data));

    toggleModal();
    window.addEventListener('keydown', handleModal.escKeyDown);
  });
}

export default onTrendingItemClick;
