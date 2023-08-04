# session-cookies

 <a href="https://badge.fury.io/js/session-cookies"><img src="https://badge.fury.io/js/session-cookies.svg" /></a>

session-cookies This plugin is used to summarize the browser's three caches localStorage, sessionStorage, Cookies.The plugin is designed to be quick and easy to use. Below is a summary of some apis.

session-cookies 这个插件是用来汇总浏览器的三个缓存 localStorage、sessionStorage、Cookies。该插件注重使用方便快捷下面是一些API汇总说明。

#### API 

|  名称   |   获取所有    |     获取单个      |     设置单个      |       移除单个       |      清除所有       |
| :-----: | :-----------: | :---------------: | :---------------: | :------------------: | :-----------------: |
| cookies | getCookieList |     getCookie     |     setCookie     |     removeCookie     |     clearCookie     |
| session |       -       | getSessionStorage | setSessionStorage | removeSessionStorage | clearSessionStorage |
|  local  |       -       |  getLocalStorage  |  setLocalStorage  |  removeLocalStorage  |  clearLocalStorage  |



#### 使用案例

`npm i session-cookies`

获取所有Cookies

```ts
import { cookies } from 'session-cookies'

cookies.getCookieList(); // 返回JSON结果数据
cookies.getCookie('test'); // 返回属性值
```