import clearTrailerSrc from '../clearTrailerSrc';
import getDOMRefs from '../getDOMRefs';
import toggleModal from '../toggleModal';

const dom = getDOMRefs();

function backdropClick(e) {
  if (e.target.hasAttribute('data-modal')) {
    toggleModal();
    removeEventListener('keydown', escKeyDown);

    if (dom.trailerRoot.classList.contains('visible')) {
      dom.trailerRoot.classList.remove('visible');
      clearTrailerSrc(dom.trailerFrame);
    }
  }
}

function closeBtnClick() {
  toggleModal();
  removeEventListener('keydown', escKeyDown);
}

function escKeyDown(e) {
  if (e.code === 'Escape') {
    toggleModal();
    removeEventListener('keydown', escKeyDown);
  }
}

export default {
  backdropClick,
  closeBtnClick,
  escKeyDown,
};
