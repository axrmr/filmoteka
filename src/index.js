import getDOMRefs from './scripts/getDOMRefs';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeClick';
import onLibraryButtonsRootClick from './scripts/eventHandlers/onLibraryButtonsRootClick';
import onModalButtonsRootClick from './scripts/eventHandlers/onModalButtonsRootClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibraryClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onTrendingItemClick from './scripts/eventHandlers/onTrendingItemClick';

// Pagination
import './scripts/pagination';

const dom = getDOMRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
dom.searchForm.addEventListener('submit', onSearchFormSubmit);
dom.trending.addEventListener('click', onTrendingItemClick);
dom.modal.addEventListener('click', handleModal.backdropClick);
dom.closeModalBtn.addEventListener('click', handleModal.closeBtnClick);
dom.modalButtonsRoot.addEventListener('click', onModalButtonsRootClick);
dom.libraryButtonsRoot.addEventListener('click', onLibraryButtonsRootClick);
dom.myLibrary.addEventListener('click', onMyLibraryClick);
dom.home.addEventListener('click', onHomeClick);
