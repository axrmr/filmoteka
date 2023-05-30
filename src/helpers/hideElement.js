const hideElement = (...elements) => {
  elements.forEach(el => {
    el.classList.add('hidden');
  });
};

export default hideElement;
