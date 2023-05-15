import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import MoviesService from '../API/MoviesService';
import createMovieItemMarkup from '../createMovieItemMarkup';
import displayElemStyle from '../displayElemStyle';
import getDOMRefs from '../getDOMRefs';
import hideMobileKeyboardOnReturn from '../hideMobileKeyboardOnReturn';
import notify from '../notify';
import renderMovieMarkup from '../renderMovieMarkup';

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();
const {
  homeBtnEl,
  trendingEl,
  searchRootEl,
  errorWrapEl,
  myLibBtnEl,
  paginationRootEl,
  libRootEl,
  libButtonsRootEl,
} = getDOMRefs();

const onSearchFormSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.searchQuery;
  const trimmedSearchQuery = input.value.trim();

  if (!trimmedSearchQuery) {
    notify.fieldCantBeEmpty(errorWrapEl);
    return;
  }

  MoviesService.searchMovie(trimmedSearchQuery)
    .then(dataArr => {
      const genresArr = $localStorage.get(GENRES_STORAGE_KEY);

      if (!dataArr.length) {
        notify.notFound(errorWrapEl);
        return;
      }

      renderMovieMarkup(
        searchRootEl,
        createMovieItemMarkup(dataArr, genresArr)
      );

      homeBtnEl.classList.remove('current');
      myLibBtnEl.classList.remove('current');
      libButtonsRootEl.classList.remove('visible');

      displayElemStyle('none', trendingEl, libRootEl, paginationRootEl);
      displayElemStyle('grid', searchRootEl);

      hideMobileKeyboardOnReturn(input);
    })
    .catch(console.error);

  form.reset();
};

export default onSearchFormSubmit;
