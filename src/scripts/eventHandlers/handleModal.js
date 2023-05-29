import clearTrailerSrc from '../../helpers/clearTrailerSrc';
import getRefs from '../getRefs';
import modal from '../modal';

const refs = getRefs();

const clearModalMovieInner = () => {
    const id = setTimeout(() => {
        refs.modalMovie.innerHTML = '';
        clearTimeout(id);
    }, 300);
};

const backdropClick = e => {
    if (!e.target.hasAttribute('data-backdrop')) {
        return;
    }
    clearModalMovieInner();
    modal.hide();
    removeEventListener('keydown', escKeyDown);

    if (refs.trailerRoot.classList.contains('visible')) {
        refs.trailerRoot.classList.remove('visible');
        clearTrailerSrc(refs.trailerFrame);
    }
};

const closeBtnClick = () => {
    clearModalMovieInner();
    modal.hide();
    removeEventListener('keydown', escKeyDown);
};

const escKeyDown = e => {
    if (e.code === 'Escape') {
        clearModalMovieInner();

        modal.hide();
        removeEventListener('keydown', escKeyDown);
    }
};

export default {
    backdropClick,
    closeBtnClick,
    escKeyDown,
};
