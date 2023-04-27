import getDOMRefs from '../getDOMRefs';
import clearTrailerSrc from '../clearTrailerSrc';

const dom = getDOMRefs();

function onCloseTrailerClick() {
  dom.trailerRoot.classList.remove('visible');
  clearTrailerSrc(dom.trailerFrame);
}

export default onCloseTrailerClick;
