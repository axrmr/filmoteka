import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import renderMovieMarkup from '../renderMovieMarkup';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const { libButtonsRootEl, homeBtnEl, myLibBtnEl, trendingEl, queueRootEl } = getDOMRefs();

const onMyLibBtnClick = () => {
  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);

  trendingEl.style.display = 'none';
  queueRootEl.style.display = 'grid';

  libButtonsRootEl.classList.add('visible');
  homeBtnEl.classList.remove('nav__btn--current');
  myLibBtnEl.classList.add('nav__btn--current');

  renderMovieMarkup(queueRootEl, createMovieItemMarkup(queueMovieArr));
  document.getElementById('tui-pagination-container').style.display = 'none';
};

export default onMyLibBtnClick;
