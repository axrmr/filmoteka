import $localStorage from '../../helpers/$localStorage';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import saveMovieToStorage from '../saveMovieToStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onAddToQueueBtnClick = () => {
    const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
        .modalMovieId;
    const currPageMoviesArr = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
    const movieObj = currPageMoviesArr.find(movie => movie.id === movieId);

    if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
        saveMovieToStorage(QUEUE_STORAGE_KEY, movieObj);
        refs.modalQueueLabel.textContent = 'Remove from queue';
        return;
    }
    removeMovieFromStorage(QUEUE_STORAGE_KEY, movieId);
    refs.modalQueueLabel.textContent = 'Add to queue';

    const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
    renderMovieMarkup(refs.libRoot, createMovieItemMarkup(queueMovieArr));
};

export default onAddToQueueBtnClick;
