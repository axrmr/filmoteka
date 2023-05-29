import getRefs from './scripts/getRefs';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onAddToQueueClick from './scripts/eventHandlers/onAddToQueueBtnClick';
import onAddToWatchedBtnClick from './scripts/eventHandlers/onAddToWatchedBtnClick';
import onCloseTrailerClick from './scripts/eventHandlers/onCloseTrailerClick';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeBtnClick';
import onLibWatchedBtnClick from './scripts/eventHandlers/onLibWatchedBtnClick';
import onMovieItemClick from './scripts/eventHandlers/onMovieItemClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibBtnClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onWatchTrailerBtnClick from './scripts/eventHandlers/onWatchTrailerBtnClick';

// Pagination
import './scripts/pagination';
// import './scripts/slider';

const refs = getRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
refs.addToQueueBtn.addEventListener('click', onAddToQueueClick);
refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);
refs.closeModalBtn.addEventListener('click', handleModal.closeBtnClick);
refs.closeTrailerBtn.addEventListener('click', onCloseTrailerClick);
refs.homeBtn.addEventListener('click', onHomeClick);
refs.logo.addEventListener('click', onHomeClick);
refs.libQueueBtn.addEventListener('click', onMyLibraryClick);
refs.libWatchedBtn.addEventListener('click', onLibWatchedBtnClick);
refs.modalBackdrop.addEventListener('click', handleModal.backdropClick);
refs.myLibBtn.addEventListener('click', onMyLibraryClick);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.moviesRoot.addEventListener('click', onMovieItemClick);
refs.watchTrailerBtn.addEventListener('click', onWatchTrailerBtnClick);
