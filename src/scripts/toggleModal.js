import getDOMRefs from './getDOMRefs';

const dom = getDOMRefs();

export default function toggleModal() {
  dom.modal.classList.toggle('visible');
  dom.modalContent.classList.toggle('visible');
  document.body.classList.add('no-scroll');
}
