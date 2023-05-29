import $localStorage from '../../helpers/$localStorage';
import displayElemStyle from '../../helpers/displayElemStyle';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onMyLibBtnClick = () => {
  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);

  refs.libQueueBtn.classList.add('current');
  refs.libWatchedBtn.classList.remove('current');

  displayElemStyle('grid', refs.libRoot);
  displayElemStyle('none', refs.trending, refs.paginationRoot, refs.searchRoot);

  refs.libButtonsRoot.classList.add('visible');
  refs.homeBtn.classList.remove('current');
  refs.myLibBtn.classList.add('current');

  renderMovieMarkup(refs.libRoot, createMovieItemMarkup(queueMovieArr));
};

export default onMyLibBtnClick;
