import Pagination from 'tui-pagination';
import MoviesService from '../API/MoviesService';
import $localStorage from '../helpers/$localStorage';
import Loader from '../helpers/Loader';
import renderMovieMarkup from '../helpers/renderMovieMarkup';
import GET_CONSTANTS from './GET_CONSTANTS';
import createMovieItemMarkup from './createMovieItemMarkup';
import getRefs from './getRefs';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();
const popcornLoader = new Loader({ el: refs.popcornLoader, className: 'visible' });

const visiblePagesCount = document.body.clientWidth > 767 ? 10 : 4;

const pagination = new Pagination(refs.paginationRoot, {
    totalItems: 10_000,
    visiblePages: visiblePagesCount,
});

pagination.on('beforeMove', async eventData => {
    popcornLoader.show();
    try {
        const trendingArr = await MoviesService.fetchTrending(eventData.page);
        $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingArr);
        renderMovieMarkup(refs.trending, createMovieItemMarkup(trendingArr));
    } catch (error) {
        console.error(error);
    } finally {
        popcornLoader.hide();
    }
});

export { pagination };
