import MoviesService from '../../API/MoviesService';
import Loader from '../../helpers/Loader';
import getRefs from '../getRefs';

const refs = getRefs();
const popcornLoader = new Loader({
  el: refs.popcornLoader,
  className: 'visible',
});

const onWatchTrailerBtnClick = () => {
  popcornLoader.show();
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
    .modalMovieId;

  MoviesService.fetchTrailer(movieId)
    .then(key => {
      if (!key) return;

      refs.trailerFrame.src = `http://www.youtube.com/embed/${key}/`;
      refs.trailerRoot.classList.add('visible');

      popcornLoader.hide();
    })
    .catch(console.error);
};

export default onWatchTrailerBtnClick;
