const getRefs = () => {
  return {
    addToWatchedBtn: document.querySelector('[data-add-to-watched]'),
    addToQueueBtn: document.querySelector('[data-add-to-queue]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    closeTrailerBtn: document.querySelector('[data-close-trailer]'),
    errorWrap: document.querySelector('[data-error-wrap]'),
    homeBtn: document.querySelector('[data-home-btn]'),
    logo: document.querySelector('[data-logo]'),
    libRoot: document.querySelector('[data-lib-root]'),
    libButtonsRoot: document.querySelector('[data-library-btns]'),
    libQueueBtn: document.querySelector('[data-lib-queue-btn]'),
    libWatchedBtn: document.querySelector('[data-lib-watched-btn]'),
    modalBackdrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
    modalMovie: document.querySelector('[data-modal-movie]'),
    moviesRoot: document.querySelector('[data-movies-root]'),
    modalQueueLabel: document.querySelector('[data-modal-queue-label]'),
    modalWatchedLabel: document.querySelector('[data-modal-watched-label]'),
    myLibBtn: document.querySelector('[data-my-lib-btn]'),
    paginationRoot: document.getElementById('tui-pagination-container'),
    popcornLoader: document.querySelector('[data-popcorn-loader]'),
    searchForm: document.querySelector('[data-form]'),
    searchRoot: document.querySelector('[data-search-root]'),
    trending: document.querySelector('[data-trending]'),
    trailerRoot: document.querySelector('[data-trailer-root]'),
    trailerFrame: document.querySelector('[data-trailer-iframe]'),
    watchTrailerBtn: document.querySelector('[data-watch-trailer]'),
  };
};

export default getRefs;
