import MoviesService from '../API/MoviesService';
import getDOMRefs from '../getDOMRefs';
import Loader from '../Loader';

const { trailerFrameEl, trailerRootEl, popcornLoaderEl } = getDOMRefs();
const popcornLoader = new Loader({ el: popcornLoaderEl, className: 'visible' });

const onWatchTrailerBtnClick = () => {
  popcornLoader.show();
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
    .modalMovieId;

  MoviesService.fetchTrailer(movieId)
    .then(key => {
      if (!key) return;

      trailerFrameEl.src = `http://www.youtube.com/embed/${key}/`;
      trailerRootEl.classList.add('visible');

      popcornLoader.hide();
    })
    .catch(console.error);
};

export default onWatchTrailerBtnClick;
