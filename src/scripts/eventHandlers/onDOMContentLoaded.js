import MoviesService from '../../API/MoviesService';
import $localStorage from '../../helpers/$localStorage';
import Loader from '../../helpers/Loader';
import displayElemStyle from '../../helpers/displayElemStyle';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';

import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';

const {
    GENRES_STORAGE_KEY,
    CURRENT_PAGE_MOVIES_STORAGE_KEY,
    QUEUE_STORAGE_KEY,
    WATCHED_STORAGE_KEY,
    HOME_PAGE_MOVIES,
} = GET_CONSTANTS();
const refs = getRefs();
const popcornLoader = new Loader({ el: refs.popcornLoader, className: 'visible' });

async function onDOMContentLoaded() {
    if (
        $localStorage.get(WATCHED_STORAGE_KEY) === undefined ||
        $localStorage.get(QUEUE_STORAGE_KEY) === undefined
    ) {
        $localStorage.save(WATCHED_STORAGE_KEY, []);
        $localStorage.save(QUEUE_STORAGE_KEY, []);
    }

    displayElemStyle('flex', refs.modalBackdrop);
    refs.homeBtn.classList.toggle('current');
    popcornLoader.show();

    try {
        const genresArr = await MoviesService.fetchGenres();
        $localStorage.save(GENRES_STORAGE_KEY, genresArr);
    } catch (error) {
        $localStorage.save(GENRES_STORAGE_KEY, []);
        console.log(error.message);
    }

    try {
        const trendingArr = await MoviesService.fetchTrending();
        $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingArr);
        $localStorage.save(HOME_PAGE_MOVIES, trendingArr);

        renderMovieMarkup(refs.trending, createMovieItemMarkup(trendingArr));
    } catch (error) {
        console.error(error.message);
    }

    // try {
    //     const response = await MoviesService.fetchTopRated();
    //     const slideRoot = document.createElement('ul');
    //     slideRoot.classList.add('glide__slides');
    //     slideRoot.innerHTML = createMovieItemMarkup(response.results);
    //     console.log(slideRoot);
    //     document.querySelector('.glide__track').append(slideRoot);
    // } catch (error) {
    //     console.log(error.message);
    // }
    popcornLoader.hide();
}

export default onDOMContentLoaded;
