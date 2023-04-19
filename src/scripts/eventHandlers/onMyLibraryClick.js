import getDOMRefs from '../getDOMRefs';
import onLibraryQueueClick from './onLibraryQueueClick';

const dom = getDOMRefs();

function onMyLibraryClick(e) {
  onLibraryQueueClick();
  e.preventDefault();
  dom.libraryButtonsRoot.classList.add('visible');
  dom.home.classList.remove('nav__link--current');
  dom.myLibrary.classList.add('nav__link--current');

  document.getElementById('tui-pagination-container').style.display = 'none';
}

export default onMyLibraryClick;
