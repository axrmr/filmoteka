const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    if (serializedState.includes(null)) {
      throw new Error(`${serializedState} cannot be added to Local Storage`);
    }
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error', error.message);
  }
};

const get = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};

const remove = key => {
  try {
    if (!localStorage.getItem(key)) {
      throw new Error(`key "${key}" not found.`);
    }

    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

export default { save, get, remove };
