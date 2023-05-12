import getDOMRefs from './getDOMRefs';

const { modalBackdropEl, modalEl } = getDOMRefs();

const toggleModal = () => {
  modalBackdropEl.classList.toggle('visible');
  modalEl.classList.toggle('visible');
};

export default toggleModal;
