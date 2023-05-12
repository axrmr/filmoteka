import clearTrailerSrc from '../clearTrailerSrc';
import getDOMRefs from '../getDOMRefs';
import toggleModal from '../toggleModal';

const { modalMovieEl, trailerRootEl, trailerFrameEl } = getDOMRefs();

const clearModalMovieInner = () => {
  const id = setTimeout(() => {
    modalMovieEl.innerHTML = '';
    clearTimeout(id);
  }, 300);
};

const backdropClick = e => {
  if (e.target.hasAttribute('data-backdrop')) {
    clearModalMovieInner();
    toggleModal();
    removeEventListener('keydown', escKeyDown);

    if (trailerRootEl.classList.contains('visible')) {
      trailerRootEl.classList.remove('visible');
      clearTrailerSrc(trailerFrameEl);
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
