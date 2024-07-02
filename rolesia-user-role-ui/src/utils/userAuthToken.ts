import { LOCAL_TOKEN_NAME } from "./constraint";

export function useAuthToken() {

  const getToken = (): string | null => {
    return localStorage.getItem(LOCAL_TOKEN_NAME);
  };

  const isAuthnicate = (): boolean => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(LOCAL_TOKEN_NAME);
      return !!token;
    }
    return false;
  };

  const setToken = (token: string): void => {
    setCookie(LOCAL_TOKEN_NAME, token, 1);
    localStorage.setItem(LOCAL_TOKEN_NAME, token);
  };

  const removeToken = (): void => {
    eraseCookie(LOCAL_TOKEN_NAME);
    localStorage.removeItem(LOCAL_TOKEN_NAME);
    localStorage.clear();
  };

  function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function eraseCookie(name: string) {
    document.cookie = name + '=; Max-Age=0'
  }

  
function parseJwt(token: string) {
    if (!token) { return }
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
}

  return {
    getToken,
    setToken,
    removeToken,
    isAuthnicate,
    parseJwt,
  };
}