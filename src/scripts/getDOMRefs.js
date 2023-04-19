export default function getDOMRefs() {
  return {
    trending: document.querySelector('[data-trending]'),
    searchForm: document.querySelector('[data-form]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    libraryButtonsRoot: document.querySelector('[data-library-btns]'),
    myLibrary: document.querySelector('[data-library]'),
    addToQueueBtn: document.querySelector('[data-add-to-queue]'),
    addToWatchedBtn: document.querySelector('[data-add-to-watched]'),
    home: document.querySelector('[data-home]'),
    libraryWatchedBtn: document.querySelector('[data-watched]'),
    libraryQueueBtn: document.querySelector('[data-queue]'),

    paginationContainer: document.getElementById('tui-pagination-container'),
  };
}
