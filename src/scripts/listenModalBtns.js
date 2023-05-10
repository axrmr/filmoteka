import onAddToQueueClick from './eventHandlers/onAddToQueueClick';
import getDOMRefs from './getDOMRefs';

const dom = getDOMRefs();

const listenModalBtns = () => {
  dom.addToQueueBtn?.addEventListener('click', onAddToQueueClick);
  dom.watchTrailer?.addEventListener('click', () => {
    dom.trailerRoot.classList.add('visible');
    console.log('dkdkdkk');
  });
};

export default listenModalBtns;
