import getDOMRefs from '../getDOMRefs';
import toggleModal from '../toggleModal';

const dom = getDOMRefs();

function backdropClick(e) {
  if (e.target.hasAttribute('data-modal')) {
    toggleModal();
    modalTransitioned();
    removeEventListener('keydown', escKeyDown);
  }
}

function closeBtnClick(e) {
  toggleModal();
  modalTransitioned();
  removeEventListener('keydown', escKeyDown);
}

function modalTransitioned() {
  dom.modal.addEventListener('transitionend', function removeItem(e) {
    document.querySelector('[data-modal-content-item]').remove();
    dom.modal.removeEventListener('transitionend', removeItem);
    document.body.classList.remove('no-scroll');
  });
}

function escKeyDown(e) {
  if (e.code === 'Escape') {
    toggleModal();
    modalTransitioned();
    removeEventListener('keydown', escKeyDown);
  }
}

export default {
  backdropClick,
  closeBtnClick,
  escKeyDown,
  modalTransitioned,
};
