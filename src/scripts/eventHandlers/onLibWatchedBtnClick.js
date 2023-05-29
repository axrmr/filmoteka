import $localStorage from '../../helpers/$localStorage';
import displayElemStyle from '../../helpers/displayElemStyle';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onLibWatchedBtnClick = () => {
  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);

  refs.libWatchedBtn.classList.add('current');
  refs.libQueueBtn.classList.remove('current');

  displayElemStyle('none', refs.searchRoot);
  displayElemStyle('grid', refs.libRoot);

  renderMovieMarkup(refs.libRoot, createMovieItemMarkup(watchedMovieArr));
};

export default onLibWatchedBtnClick;
