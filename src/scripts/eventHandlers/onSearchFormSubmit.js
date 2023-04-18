import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';
import searchMovies from '../searchMovie';
import showSearchError from '../showSearchError';

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

function onSearchFormSubmit(e) {
  e.preventDefault();

  const trimmedSearchQuery = e.currentTarget.elements.searchQuery.value.trim();
  if (!trimmedSearchQuery) {
    showSearchError();
    return;
  }
  searchMovies(trimmedSearchQuery)
    .then(dataArr => {
      if (!dataArr.length) {
        showSearchError();
        return;
      }
      const genresArr = $localStorage.get(GENRES_STORAGE_KEY);
      const movieItemsMarkup = createMovieItemMarkup(dataArr, genresArr);

      renderMovieMarkup(dom.trending, movieItemsMarkup);
      document.getElementById('tui-pagination-container').style.display = 'none';
    })
    .catch(console.log);

  e.currentTarget.reset();
}

export default onSearchFormSubmit;
