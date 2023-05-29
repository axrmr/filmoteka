import MoviesService from '../../API/MoviesService';
import $localStorage from '../../helpers/$localStorage';
import displayElemStyle from '../../helpers/displayElemStyle';
import hideMobileKeyboardOnReturn from '../../helpers/hideMobileKeyboardOnReturn';
import notify from '../../helpers/notify';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';

const { GENRES_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onSearchFormSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.searchQuery;
  const trimmedSearchQuery = input.value.trim();

  if (!trimmedSearchQuery) {
    notify.fieldCantBeEmpty(refs.errorWrap);
    return;
  }

  MoviesService.searchMovie(trimmedSearchQuery)
    .then(dataArr => {
      const genresArr = $localStorage.get(GENRES_STORAGE_KEY);

      if (!dataArr.length) {
        notify.notFound(refs.errorWrap);
        return;
      }

      renderMovieMarkup(
        refs.searchRoot,
        createMovieItemMarkup(dataArr, genresArr)
      );

      refs.homeBtn.classList.remove('current');
      refs.myLibBtn.classList.remove('current');
      refs.libButtonsRoot.classList.remove('visible');

      displayElemStyle(
        'none',
        refs.trending,
        refs.libRoot,
        refs.paginationRoot
      );
      displayElemStyle('grid', refs.searchRoot);

      hideMobileKeyboardOnReturn(input);
    })
    .catch(console.error);

  form.reset();
};

export default onSearchFormSubmit;
