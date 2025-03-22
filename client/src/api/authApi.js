import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { request } from "../utils/requester";
const baseUrl = "/users";

export const useLogin = () => {
  const abortRef = useRef(new AbortController());

  const login = async (email, password, userCtx) => {
    const loginData = await request.post(
      `${baseUrl}/login`,
      {
        email,
        password,
      },
      null,
      userCtx,
      { signal: abortRef.current.signal }
    );
    return loginData;
  };

  useEffect(() => {
    const abortController = abortRef.current;
    return () => abortController.abort();
  });

  return {
    login,
  };
};

export const useRegister = () => {
  const abortRef = useRef(new AbortController());

  const register = async (username, email, password) => {
    const registerData = await request.post(
      `${baseUrl}/register`,
      { username, email, password },
      { signal: abortRef.current.signal }
    );
    return registerData;
  };

  useEffect(() => {
    const abortController = abortRef.current;
    return () => abortController.abort();
  });

  return {
    register,
  };
};

export const useLogout = (userCtx) => {
  const logout = () => request.get(`${baseUrl}/logout`, null, userCtx);

  return logout;
};
