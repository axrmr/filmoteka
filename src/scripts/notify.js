const showNotif = el => {
  el.classList.add('visible');
};

const hideNotif = el => {
  let id = setTimeout(() => {
    el.classList.remove('visible');

    clearTimeout(id);
  }, 2500);
};

const fieldCantBeEmpty = el => {
  el.textContent = 'This field cannot be empty.Enter a movie name.';
  showNotif(el);
  hideNotif(el);
};

const notFound = el => {
  el.textContent = 'Movie not found.';
  showNotif(el);
  hideNotif(el);
};

export default { fieldCantBeEmpty, notFound };
