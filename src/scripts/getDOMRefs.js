const getDOMRefs = () => {
  return {
    addToWatchedBtnEl: document.querySelector('[data-add-to-watched]'),
    addToQueueBtnEl: document.querySelector('[data-add-to-queue]'),
    closeModalBtnEl: document.querySelector('[data-close-modal]'),
    closeTrailerBtnEl: document.querySelector('[data-close-trailer]'),
    errorWrapEl: document.querySelector('[data-error-wrap]'),
    homeBtnEl: document.querySelector('[data-home-btn]'),
    logoEl: document.querySelector('[data-logo]'),
    libRootEl: document.querySelector('[data-lib-root]'),
    libButtonsRootEl: document.querySelector('[data-library-btns]'),
    libQueueBtnEl: document.querySelector('[data-lib-queue-btn]'),
    libWatchedBtnEl: document.querySelector('[data-lib-watched-btn]'),
    modalBackdropEl: document.querySelector('[data-backdrop]'),
    modalEl: document.querySelector('[data-modal]'),
    modalContentEl: document.querySelector('[data-modal-content]'),
    modalMovieEl: document.querySelector('[data-modal-movie]'),
    moviesRootEl: document.querySelector('[data-movies-root]'),
    modalQueueLabelEl: document.querySelector('[data-modal-queue-label]'),
    modalWatchedLabelEl: document.querySelector('[data-modal-watched-label]'),
    myLibBtnEl: document.querySelector('[data-my-lib-btn]'),
    paginationRootEl: document.getElementById('tui-pagination-container'),
    popcornLoaderEl: document.querySelector('[data-popcorn-loader]'),
    searchFormEl: document.querySelector('[data-form]'),
    searchRootEl: document.querySelector('[data-search-root]'),
    trendingEl: document.querySelector('[data-trending]'),
    trailerRootEl: document.querySelector('[data-trailer-root]'),
    trailerFrameEl: document.querySelector('[data-trailer-iframe]'),
    watchTrailerBtnEl: document.querySelector('[data-watch-trailer]'),
  };
};

export default getDOMRefs;
