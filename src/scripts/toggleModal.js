import getDOMRefs from './getDOMRefs';

const dom = getDOMRefs();

const toggleModal = () => {
  dom.modal.classList.toggle('visible');
  dom.modalContent.classList.toggle('visible');
  document.body.classList.add('no-scroll');
};

export default toggleModal;
