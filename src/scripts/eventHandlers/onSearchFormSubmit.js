import MoviesService from '../../API/MoviesService';
import hideElement from '../../helpers/hideElement';
import hideMobileKeyboardOnReturn from '../../helpers/hideMobileKeyboardOnReturn';
import notify from '../../helpers/notify';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import showElement from '../../helpers/showElement';
import getRefs from '../getRefs';
import createPopularMarkup from '../markup/createPopularMarkup';

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
      if (!dataArr.length) {
        notify.notFound(refs.errorWrap);
        return;
      }

      renderMovieMarkup(refs.searchRoot, createPopularMarkup(dataArr));

      refs.homeBtn.classList.remove('current');
      refs.myLibBtn.classList.remove('current');
      refs.libButtonsRoot.classList.remove('visible');

      hideElement(
        refs.popularSection,
        refs.trendingSection,
        refs.paginationRoot,
        refs.libSection
      );

      showElement(refs.searchSection);

      hideMobileKeyboardOnReturn(input);
    })
    .catch(console.error);

  form.reset();
};

export default onSearchFormSubmit;
