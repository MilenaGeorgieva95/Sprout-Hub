import { useState } from "react";

export default function useLocalStorage(key = "auth", initialValue = {}) {
  const [authData, setAuthData] = useState(() => {
    const authJson = localStorage.getItem('auth');
    if (!authJson) {
     return {};
    }
    const authData = JSON.parse(authJson || '');
    return authData;
  });

  const setLocalStorageUser = (userData) => {

    const userDataJson = JSON.stringify(userData);
    localStorage.setItem('auth', userDataJson);
    setAuthData(userData);
  };

  return [authData, setLocalStorageUser];
}