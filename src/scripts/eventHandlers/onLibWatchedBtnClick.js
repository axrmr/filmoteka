import $localStorage from '../../helpers/$localStorage';
import hideElement from '../../helpers/hideElement';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import showElement from '../../helpers/showElement';
import GET_CONSTANTS from '../GET_CONSTANTS';
import getRefs from '../getRefs';
import createPopularMarkup from '../markup/createPopularMarkup';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onLibWatchedBtnClick = () => {
  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);

  refs.libWatchedBtn.classList.add('current');
  refs.libQueueBtn.classList.remove('current');

  hideElement(refs.searchRoot);
  showElement(refs.libRoot);
  renderMovieMarkup(refs.libRoot, createPopularMarkup(watchedMovieArr));
};

export default onLibWatchedBtnClick;
