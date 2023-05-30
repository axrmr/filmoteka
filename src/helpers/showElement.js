const showElement = (...elements) => {
  elements.forEach(el => {
    el.classList.remove('hidden');
  });
};

export default showElement;
