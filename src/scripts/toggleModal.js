import getDOMRefs from './getDOMRefs';

const dom = getDOMRefs();

const toggleModal = () => {
  dom.modalBackdrop.classList.toggle('visible');
  dom.modal.classList.toggle('visible');
};

export default toggleModal;
