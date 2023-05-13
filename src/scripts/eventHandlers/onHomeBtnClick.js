import getDOMRefs from '../getDOMRefs';
import { pagination } from '../pagination';
import renderHomePage from '../renderHomePage';

const { libButtonsRootEl, myLibBtnEl, homeBtnEl, trendingEl, queueRootEl } = getDOMRefs();

const onHomeBtnClick = e => {
  e.preventDefault();

  pagination.reset();
  libButtonsRootEl.classList.remove('visible');
  myLibBtnEl.classList.remove('nav__btn--current');
  homeBtnEl.classList.add('nav__btn--current');

  trendingEl.style.display = 'grid';
  queueRootEl.style.display = 'none';

  renderHomePage();
};

export default onHomeBtnClick;
