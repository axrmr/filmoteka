const showSearchError = error => {
  document.querySelector('[data-search-error]').classList.add('visible');

  let id = setTimeout(() => {
    document.querySelector('[data-search-error]').classList.remove('visible');

    clearTimeout(id);
  }, 2500);
};

export default showSearchError;
