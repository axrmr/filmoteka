import GET_CONSTANTS from '../ GET_CONSTANTS';
import getDOMRefs from '../getDOMRefs';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

function onMyLibraryClick(e) {
  e.preventDefault();
  dom.libraryButtonsRoot.classList.add('visible');
  dom.home.classList.remove('nav__link--current');
  dom.myLibrary.classList.add('nav__link--current');

  document.getElementById('tui-pagination-container').style.display = 'none';
}

export default onMyLibraryClick;
