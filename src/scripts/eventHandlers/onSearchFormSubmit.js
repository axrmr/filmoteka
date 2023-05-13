import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import MoviesService from '../API/MoviesService';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import notify from '../notify';
import renderMovieMarkup from '../renderMovieMarkup';

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();
const { trendingEl, errorWrapEl } = getDOMRefs();

const onSearchFormSubmit = e => {
  e.preventDefault();

  const trimmedSearchQuery = e.currentTarget.elements.searchQuery.value.trim();
  if (!trimmedSearchQuery) {
    notify.fieldCantBeEmpty(errorWrapEl);
    return;
  }

  MoviesService.searchMovie(trimmedSearchQuery)
    .then(dataArr => {
      if (!dataArr.length) {
        notify.notFound(errorWrapEl);
        return;
      }
      const genresArr = $localStorage.get(GENRES_STORAGE_KEY);
      renderMovieMarkup(trendingEl, createMovieItemMarkup(dataArr, genresArr));

      document.getElementById('tui-pagination-container').style.display = 'none';
    })
    .catch(console.error);

  e.currentTarget.reset();
};

export default onSearchFormSubmit;
