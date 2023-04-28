const getDOMRefs = () => {
  return {
    addToWatchedBtn: document.querySelector('[data-add-to-watched]'),
    addToQueueBtn: document.querySelector('[data-add-to-queue]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    closeTrailer: document.querySelector('[data-close-trailer]'),
    home: document.querySelector('[data-home]'),
    libraryButtonsRoot: document.querySelector('[data-library-btns]'),
    libraryQueueBtn: document.querySelector('[data-queue]'),
    libraryWatchedBtn: document.querySelector('[data-watched]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
    modalBtnsRoot: document.querySelector('[data-modal-buttons]'),
    myLibrary: document.querySelector('[data-library]'),
    paginationContainer: document.getElementById('tui-pagination-container'),
    searchForm: document.querySelector('[data-form]'),
    trending: document.querySelector('[data-trending]'),
    trailerRoot: document.querySelector('[data-trailer-root]'),
    trailerFrame: document.querySelector('[data-trailer-iframe]'),
    watchTrailer: document.querySelector('[data-watch-trailer]'),
  };
};

export default getDOMRefs;
