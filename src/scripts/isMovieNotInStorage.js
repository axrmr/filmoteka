import $localStorage from '../helpers/$localStorage';

const isMovieNotInStorage = (storageKey, movieId) => {
    if (!movieId) return;

    const moviesArr = $localStorage.get(storageKey);
    const isNotInStor = moviesArr.find(movie => movie.id === movieId) === undefined;

    return moviesArr.length === 0 || isNotInStor;
};

export default isMovieNotInStorage;
