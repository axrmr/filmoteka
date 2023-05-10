import clearTrailerSrc from '../clearTrailerSrc';
import getDOMRefs from '../getDOMRefs';
import toggleModal from '../toggleModal';

const dom = getDOMRefs();

const clearModalMovieInner = () => {
  const id = setTimeout(() => {
    dom.modalMovie.innerHTML = '';
    clearTimeout(id);
  }, 300);
};

const backdropClick = e => {
  if (e.target.hasAttribute('data-backdrop')) {
    clearModalMovieInner();
    toggleModal();
    removeEventListener('keydown', escKeyDown);

    if (dom.trailerRoot.classList.contains('visible')) {
      dom.trailerRoot.classList.remove('visible');
      clearTrailerSrc(dom.trailerFrame);
    }
  }
};

const closeBtnClick = () => {
  clearModalMovieInner();
  toggleModal();
  removeEventListener('keydown', escKeyDown);
};

const escKeyDown = e => {
  if (e.code === 'Escape') {
    clearModalMovieInner();

    toggleModal();
    removeEventListener('keydown', escKeyDown);
  }
};

export default {
  backdropClick,
  closeBtnClick,
  escKeyDown,
};
