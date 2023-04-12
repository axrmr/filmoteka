const showSearchError = () => {
  document.getElementById('search-error').classList.add('visible');

  let id = setTimeout(() => {
    document.getElementById('search-error').classList.remove('visible');

    clearTimeout(id);
  }, 2500);
};

export default showSearchError;
