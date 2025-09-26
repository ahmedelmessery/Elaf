import safeLocalStorage from "./safeLocalStorage";

if (typeof globalThis.localStorage === "undefined") {
  globalThis.localStorage = safeLocalStorage;
}
