"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/LocalStorage.tsx
  var LocalStorage_exports = {};
  __export(LocalStorage_exports, {
    clearLocalStorage: () => clearLocalStorage,
    getLocalStorage: () => getLocalStorage,
    getLocalStorageKeyFindIndex: () => getLocalStorageKeyFindIndex,
    removeLocalStorage: () => removeLocalStorage,
    setLocalStorage: () => setLocalStorage
  });
  var getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (!data)
      return void 0;
    return data;
  };
  var setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  var removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  var clearLocalStorage = () => {
    localStorage.clear();
  };
  var getLocalStorageKeyFindIndex = (index) => {
    return localStorage.key(index);
  };

  // src/SessionStorage.tsx
  var SessionStorage_exports = {};
  __export(SessionStorage_exports, {
    clearSessionStorage: () => clearSessionStorage,
    getSessionStorage: () => getSessionStorage,
    getSessionStorageKeyFindIndex: () => getSessionStorageKeyFindIndex,
    removeSessionStorage: () => removeSessionStorage,
    setSessionStorage: () => setSessionStorage
  });
  var getSessionStorage = (key) => {
    const data = sessionStorage.getItem(key);
    if (!data)
      return void 0;
    return data;
  };
  var setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value);
  };
  var removeSessionStorage = (key) => {
    sessionStorage.removeItem(key);
  };
  var clearSessionStorage = () => {
    sessionStorage.clear();
  };
  var getSessionStorageKeyFindIndex = (index) => {
    return sessionStorage.key(index);
  };

  // src/Cookie.tsx
  var Cookie_exports = {};
  __export(Cookie_exports, {
    clearCookie: () => clearCookie,
    getCookie: () => getCookie,
    getCookieList: () => getCookieList,
    removeCookie: () => removeCookie,
    setCookie: () => setCookie
  });
  function getCookieStr() {
    return document.cookie.split(";");
  }
  function getCookieList() {
    const cookies = [];
    getCookieStr()?.forEach((item) => {
      const [key, value] = item.trim().split("=");
      cookies.push({ [key]: value });
    });
    return cookies;
  }
  var getCookie = (key) => {
    const data = getCookieStr()?.find(
      (item) => item.includes(`${key}=`)
    );
    if (!data)
      return void 0;
    const [key1, value] = data.trim().split("=");
    console.log(key1);
    return value;
  };
  var setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
  };
  var removeCookie = (key) => {
    document.cookie = `${key}=;path=/;max-age=0`;
  };
  var clearCookie = () => {
    getCookieStr().map((item) => {
      const [key] = item.trim().split("=");
      removeCookie(key);
    });
  };

  // src/Storage.ts
  var Storage_default = { ...LocalStorage_exports, ...SessionStorage_exports, ...Cookie_exports };
})();
