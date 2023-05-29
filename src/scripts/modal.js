import getRefs from './getRefs';

const refs = getRefs();

const show = () => {
  refs.modalBackdrop.classList.add('visible');
  refs.modal.classList.add('visible');
  document.body.addEventListener('transitionend', () => {
    document.body.classList.add('no-scroll');
  });
};

const hide = () => {
  refs.modalBackdrop.classList.remove('visible');
  refs.modal.classList.remove('visible');
  document.body.addEventListener('transitionend', function hideScrollBar() {
    document.body.classList.remove('no-scroll');
    removeEventListener(this, hideScrollBar);
  });
};

export default { show, hide };
