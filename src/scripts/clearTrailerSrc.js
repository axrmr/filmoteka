const clearTrailerSrc = el => {
  const source = el.src;
  el.src = '';
  el.src = source;
};

export default clearTrailerSrc;
