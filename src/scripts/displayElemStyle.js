const displayElemStyle = (style, ...elems) => {
  elems.forEach(el => (el.style.display = style));
};

export default displayElemStyle;
