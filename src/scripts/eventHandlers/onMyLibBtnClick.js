import $localStorage from '../../helpers/$localStorage';
import hideElement from '../../helpers/hideElement';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import showElement from '../../helpers/showElement';
import GET_CONSTANTS from '../GET_CONSTANTS';
import getRefs from '../getRefs';
import createPopularMarkup from '../markup/createPopularMarkup';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onMyLibBtnClick = () => {
  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);

  refs.libQueueBtn.classList.add('current');
  refs.libWatchedBtn.classList.remove('current');

  showElement(refs.libRoot, refs.libSection);
  hideElement(
    refs.searchSection,
    refs.popularSection,
    refs.trendingSection,
    refs.paginationRoot
  );

  refs.myLibBtn.classList.add('current');
  refs.libButtonsRoot.classList.add('visible');
  refs.homeBtn.classList.remove('current');

  renderMovieMarkup(refs.libRoot, createPopularMarkup(queueMovieArr));
};

export default onMyLibBtnClick;
