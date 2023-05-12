import getDOMRefs from './getDOMRefs';

const { loaderEl } = getDOMRefs();

const show = () => {
  loaderEl.classList.add('visible');
};

const hide = () => {
  loaderEl.classList.remove('visible');
};

export default { show, hide };
