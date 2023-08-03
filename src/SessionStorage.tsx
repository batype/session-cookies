/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author shaosong
 * @description
 */

type S = string;

/**
 * 获取sessionStorage
 * @param key 对应key值
 * @returns 结果
 */
const getSessionStorage = (key: S) => {
  const data = sessionStorage.getItem(key);
  if (!data) return undefined;
  return data;
};

/**
 * 设置单个sessionStorage
 * @param key 对应key值
 * @param value 存储值
 */
const setSessionStorage = (key: S, value: S) => {
  sessionStorage.setItem(key, value);
};

/**
 * 移除sessionStorage
 * @param key 对应key值
 */
const removeSessionStorage = (key: S) => {
  sessionStorage.removeItem(key);
};

/**
 * 清除所有sessionStorage
 */
const clearSessionStorage = () => {
  sessionStorage.clear();
};

/**
 * 根据index下标获取key值
 * @param index number
 * @returns string | undefined
 */
const getSessionStorageKeyFindIndex = (index: number) => {
  return sessionStorage.key(index);
};

export {
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
  getSessionStorageKeyFindIndex,
};
