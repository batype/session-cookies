/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author shaosong
 * @description cookies
 */

type S = string;

function getCookieStr(): any[] {
  return document.cookie.split(";");
}
/**
 * 获取所有cookie
 * @returns any[]
 */
function getCookieList(): any[] {
  const cookies: any[] = [];
  getCookieStr()?.forEach((item: string) => {
    const [key, value] = item.trim().split("=");
    cookies.push({ [key]: value });
  });
  return cookies;
}

/**
 * 获取localStorage
 * @param key 对应key值
 * @returns 结果
 */
const getCookie = (key: S) => {
  const data: string = getCookieStr()?.find((item: string) =>
    item.includes(`${key}=`)
  );
  if (!data) return undefined;
  const [key1, value] = data.trim().split("=");
  console.log(key1);
  return value;
};

/**
 * 设置单个localStorage
 * @param key 对应key值
 * @param value 存储值
 */
const setCookie = (key: S, value: S) => {
  document.cookie = `${key}=${value}`;
};

/**
 * 移除localStorage
 * @param key 对应key值
 */
const removeCookie = (key: S) => {
  document.cookie = `${key}=;path=/;max-age=0`;
};

/**
 * 清除所有localStorage
 */
const clearCookie = () => {
  getCookieStr().map((item: string) => {
    const [key] = item.trim().split("=");
    removeCookie(key);
  });
};

export const cookies = {
  getCookieList,
  getCookie,
  setCookie,
  removeCookie,
  clearCookie,
};
