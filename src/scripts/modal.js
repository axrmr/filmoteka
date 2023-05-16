import getDOMRefs from './getDOMRefs';

const { modalBackdropEl, modalEl } = getDOMRefs();

const show = () => {
  modalBackdropEl.classList.add('visible');
  modalEl.classList.add('visible');
  document.body.addEventListener('transitionend', () => {
    document.body.classList.add('no-scroll');
  });
};

const hide = () => {
  modalBackdropEl.classList.remove('visible');
  modalEl.classList.remove('visible');
  document.body.addEventListener('transitionend', function hideScrollBar() {
    document.body.classList.remove('no-scroll');
    removeEventListener(this, hideScrollBar);
  });
};

export default { show, hide };
