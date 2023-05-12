import MoviesService from '../API/MoviesService';
import getDOMRefs from '../getDOMRefs';
import loader from '../loader';

const { trailerFrameEl, trailerRootEl } = getDOMRefs();

const onWatchTrailerBtnClick = () => {
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset.modalMovieId;
  loader.show();

  MoviesService.fetchTrailer(movieId)
    .then(key => {
      if (!key) return;

      loader.hide();
      trailerFrameEl.src = `http://www.youtube.com/embed/${key}`;
      trailerRootEl.classList.add('visible');
    })
    .catch(console.error);
};

export default onWatchTrailerBtnClick;
