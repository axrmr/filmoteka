import FetchMovie from '../FetchMovie';
import getDOMRefs from '../getDOMRefs';
import setMovieDetails from '../setMovieDetails';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const fetchMovie = new FetchMovie();
const dom = getDOMRefs();

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;

  const movieId = e.target.closest('[data-id]').dataset.id;

  fetchMovie
    .details(movieId)
    .then(data => {
      dom.modalContent.insertAdjacentHTML('afterbegin', setMovieDetails(data));

      toggleModal();
      window.addEventListener('keydown', handleModal.escKeyDown);
    })
    .catch(console.log);

  fetchMovie
    .trailer(movieId)
    .then(key => {
      if (!key) return;

      dom.trailerFrame.src = `http://www.youtube.com/embed/${key}`;
    })
    .catch(console.log);
};

export default onMovieItemClick;
