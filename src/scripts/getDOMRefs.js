export default function getDOMRefs() {
  return {
    trending: document.querySelector('[data-trending]'),
    searchForm: document.querySelector('[data-form]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modalButtonsWrap: document.querySelector('[data-modal-buttons]'),
    myLibrary: document.getElementById('library'),

    paginationContainer: document.getElementById('tui-pagination-container'),
  };
}
