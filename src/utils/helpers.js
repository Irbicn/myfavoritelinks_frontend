export const localStorageSave = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
export const localStorageDelete = (name) => {
  localStorage.removeItem(name);
};
export const localStorageRead = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
const helpers = {
  localStorageDelete,
  localStorageRead,
  localStorageSave,
};

export default helpers;
