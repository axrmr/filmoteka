import hideElement from '../../helpers/hideElement';
import showElement from '../../helpers/showElement';
import getRefs from '../getRefs';
import { pagination } from '../pagination';
import renderHomePage from '../renderHomePage';

const refs = getRefs();

const onHomeBtnClick = e => {
  e.preventDefault();
  pagination.reset();

  refs.libButtonsRoot.classList.remove('visible');
  refs.myLibBtn.classList.remove('current');
  refs.homeBtn.classList.add('current');

  hideElement(refs.libSection, refs.searchSection);
  showElement(
    refs.popularRoot,
    refs.trendingSection,
    refs.popularSection,
    refs.paginationRoot
  );

  renderHomePage();
};

export default onHomeBtnClick;
