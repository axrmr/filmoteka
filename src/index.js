import getDOMRefs from './scripts/getDOMRefs';
import hideMobileKeyboardOnReturn from './scripts/hideMobileKeyboardOnReturn';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onAddToQueueClick from './scripts/eventHandlers/onAddToQueueClick';
import onCloseTrailerClick from './scripts/eventHandlers/onCloseTrailerClick';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeClick';
import onLibraryQueueClick from './scripts/eventHandlers/onLibraryQueueClick';
import onMovieItemClick from './scripts/eventHandlers/onMovieItemClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibraryClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';

// Pagination
import './scripts/pagination';

const dom = getDOMRefs();

console.log(dom.modalBackdrop);

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
dom.closeModalBtn.addEventListener('click', handleModal.closeBtnClick);
dom.closeTrailer.addEventListener('click', onCloseTrailerClick);
dom.home.addEventListener('click', onHomeClick);
// dom.libraryWatchedBtn.addEventListener('click', onLibraryWatchedClick);
dom.libraryQueueBtn.addEventListener('click', onLibraryQueueClick);
dom.logo.addEventListener('click', onHomeClick);
dom.modalBackdrop.addEventListener('click', handleModal.backdropClick);
dom.myLibrary.addEventListener('click', onMyLibraryClick);
dom.searchForm.addEventListener('submit', onSearchFormSubmit);
dom.trending.addEventListener('click', onMovieItemClick);
dom.addToQueueBtn.addEventListener('click', onAddToQueueClick);
dom.watchTrailer.addEventListener('click', () => {
  dom.trailerRoot.classList.add('visible');
});

hideMobileKeyboardOnReturn(dom.searchForm);
