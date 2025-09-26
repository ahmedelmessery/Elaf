// utils/safeLocalStorage.js
const safeLocalStorage = {
  getItem(key) {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  },
  setItem(key, value) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, value);
    } catch (err) {}
  },
  removeItem(key) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch (err) {}
  },
  clear() {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.clear();
    } catch (err) {}
  },
};

export default safeLocalStorage;
