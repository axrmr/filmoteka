export default function getDOMRefs() {
  return {
    trending: document.querySelector('[data-trending]'),
    searchForm: document.querySelector('[data-form]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modalButtonsRoot: document.querySelector('[data-modal-buttons]'),
    myLibrary: document.querySelector('[data-library]'),
    libraryButtonsRoot: document.querySelector('[data-library-btns]'),
    home: document.querySelector('[data-home]'),

    paginationContainer: document.getElementById('tui-pagination-container'),
  };
}
