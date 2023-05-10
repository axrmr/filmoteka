import getDOMRefs from '../getDOMRefs';
import onLibraryQueueClick from './onLibraryQueueClick';

const dom = getDOMRefs();

const onMyLibraryClick = e => {
  dom.libraryButtonsRoot.classList.add('visible');
  dom.home.classList.remove('nav__btn--current');
  dom.myLibrary.classList.add('nav__btn--current');

  onLibraryQueueClick();
  document.getElementById('tui-pagination-container').style.display = 'none';
};

export default onMyLibraryClick;
