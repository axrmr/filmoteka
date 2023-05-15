import displayElemStyle from '../displayElemStyle';
import getDOMRefs from '../getDOMRefs';
import { pagination } from '../pagination';
import renderHomePage from '../renderHomePage';

const { libButtonsRootEl, myLibBtnEl, homeBtnEl, trendingEl, libRootEl } =
  getDOMRefs();

const onHomeBtnClick = e => {
  e.preventDefault();

  pagination.reset();

  libButtonsRootEl.classList.remove('visible');
  myLibBtnEl.classList.remove('current');
  homeBtnEl.classList.add('current');

  displayElemStyle('none', libRootEl);
  displayElemStyle('grid', trendingEl);

  renderHomePage();
};

export default onHomeBtnClick;
