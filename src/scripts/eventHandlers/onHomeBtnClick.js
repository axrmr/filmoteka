import displayElemStyle from '../../helpers/displayElemStyle';
import getRefs from '../getRefs';
import { pagination } from '../pagination';
import renderHomePage from '../renderHomePage';

const refs = getRefs();

const onHomeBtnClick = e => {
    e.preventDefault();

    pagination.reset();

    refs.libButtonsRoot.classList.remove('visible');
    refs.myLibBtn.classList.remove('current');
    refs.homeBtn.classList.add('current');

    displayElemStyle('none', refs.libRoot);
    displayElemStyle('grid', refs.trending);

    renderHomePage();
};

export default onHomeBtnClick;
