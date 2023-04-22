import getDOMRefs from './scripts/getDOMRefs';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onAddToQueueClick from './scripts/eventHandlers/onAddToQueueClick';
import onAddToWatchedClick from './scripts/eventHandlers/onAddToWatchedClick';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeClick';
import onLibraryQueueClick from './scripts/eventHandlers/onLibraryQueueClick';
import onLibraryWatchedClick from './scripts/eventHandlers/onLibraryWatchedClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibraryClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onMovieClick from './scripts/eventHandlers/onMovieClick';

// Pagination
import './scripts/pagination';

const dom = getDOMRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
dom.searchForm.addEventListener('submit', onSearchFormSubmit);
dom.trending.addEventListener('click', onMovieClick);
dom.modal.addEventListener('click', handleModal.backdropClick);
dom.closeModalBtn.addEventListener('click', handleModal.closeBtnClick);
dom.libraryWatchedBtn.addEventListener('click', onLibraryWatchedClick);
dom.libraryQueueBtn.addEventListener('click', onLibraryQueueClick);
dom.addToWatchedBtn.addEventListener('click', onAddToWatchedClick);
dom.addToQueueBtn.addEventListener('click', onAddToQueueClick);
dom.myLibrary.addEventListener('click', onMyLibraryClick);
dom.home.addEventListener('click', onHomeClick);
