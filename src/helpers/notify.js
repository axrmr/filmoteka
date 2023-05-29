const showNotification = el => {
    el.classList.add('visible');
};

const hideNotification = el => {
    const id = setTimeout(() => {
        el.classList.remove('visible');

        clearTimeout(id);
    }, 2500);
};

const fieldCantBeEmpty = el => {
    el.textContent = 'This field cannot be empty.Enter a movie name.';
    showNotification(el);
    hideNotification(el);
};

const notFound = el => {
    el.textContent = 'Movie not found.';
    showNotification(el);
    hideNotification(el);
};

export default { fieldCantBeEmpty, notFound };
