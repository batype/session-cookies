/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author shaosong
 * @description
 */

type S = string;

/**
 * 获取localStorage
 * @param key 对应key值
 * @returns 结果
 */
const getLocalStorage = (key: S) => {
  const data = localStorage.getItem(key);
  if (!data) return undefined;
  return data;
};

/**
 * 设置单个localStorage
 * @param key 对应key值
 * @param value 存储值
 */
const setLocalStorage = (key: S, value: S) => {
  localStorage.setItem(key, value);
};

/**
 * 移除localStorage
 * @param key 对应key值
 */
const removeLocalStorage = (key: S) => {
  localStorage.removeItem(key);
};

/**
 * 清除所有localStorage
 */
const clearLocalStorage = () => {
  localStorage.clear();
};

/**
 * 根据index下标获取key值
 * @param index number
 * @returns string | undefined
 */
const getLocalStorageKeyFindIndex = (index: number) => {
  return localStorage.key(index);
};

/**
 * 获取所有数据
 * @returns Storage
 */
function getAllLocalStorage(): Storage {
  return localStorage;
}

export const local = {
  getAllLocalStorage,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  getLocalStorageKeyFindIndex,
};
