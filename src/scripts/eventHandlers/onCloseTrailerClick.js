import clearTrailerSrc from '../../helpers/clearTrailerSrc';
import getRefs from '../getRefs';

const refs = getRefs();

function onCloseTrailerClick() {
    refs.trailerRoot.classList.remove('visible');
    clearTrailerSrc(refs.trailerFrame);
}

export default onCloseTrailerClick;
