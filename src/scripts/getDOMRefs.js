const getDOMRefs = () => {
  return {
    addToWatchedBtnEl: document.querySelector('[data-add-to-watched]'),
    addToQueueBtnEl: document.querySelector('[data-add-to-queue]'),
    closeModalBtnEl: document.querySelector('[data-close-modal]'),
    closeTrailerBtnEl: document.querySelector('[data-close-trailer]'),
    homeBtnEl: document.querySelector('[data-home]'),
    loaderEl: document.querySelector('[data-loader]'),
    logoEl: document.querySelector('[data-logo]'),
    libButtonsRootEl: document.querySelector('[data-library-btns]'),
    libQueueBtnEl: document.querySelector('[data-queue]'),
    libWatchedBtnEl: document.querySelector('[data-watched]'),
    modalBackdropEl: document.querySelector('[data-backdrop]'),
    modalEl: document.querySelector('[data-modal]'),
    modalContentEl: document.querySelector('[data-modal-content]'),
    modalMovieEl: document.querySelector('[data-modal-movie]'),
    moviesRootEl: document.querySelector('[data-movies-root]'),
    myLibBtnEl: document.querySelector('[data-library]'),
    paginationRootEl: document.getElementById('tui-pagination-container'),
    searchFormEl: document.querySelector('[data-form]'),
    trendingEl: document.querySelector('[data-trending]'),
    trailerRootEl: document.querySelector('[data-trailer-root]'),
    trailerFrameEl: document.querySelector('[data-trailer-iframe]'),
    queueRootEl: document.querySelector('[data-queue-root]'),
    watchTrailerBtnEl: document.querySelector('[data-watch-trailer]'),
  };
};

export default getDOMRefs;
