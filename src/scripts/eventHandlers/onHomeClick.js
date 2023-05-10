import getDOMRefs from '../getDOMRefs';
import renderHomePage from '../renderHomePage';

const dom = getDOMRefs();

const onHomeClick = e => {
  e.preventDefault();

  dom.libraryButtonsRoot.classList.remove('visible');
  dom.myLibrary.classList.remove('nav__btn--current');
  dom.home.classList.add('nav__btn--current');

  renderHomePage();
};

export default onHomeClick;
