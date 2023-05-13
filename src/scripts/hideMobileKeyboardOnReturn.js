const hideMobileKeyboardOnReturn = keyboardEvent => {
  const key = keyboardEvent.code || keyboardEvent.keyCode;
  if (key === 'Enter' || key === 13) {
    element.blur();
  }
};

export default hideMobileKeyboardOnReturn;
