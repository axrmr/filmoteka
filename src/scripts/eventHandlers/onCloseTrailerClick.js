import clearTrailerSrc from '../clearTrailerSrc';
import getDOMRefs from '../getDOMRefs';

const { trailerRootEl, trailerFrameEl } = getDOMRefs();

function onCloseTrailerClick() {
  trailerRootEl.classList.remove('visible');
  clearTrailerSrc(trailerFrameEl);
}

export default onCloseTrailerClick;
