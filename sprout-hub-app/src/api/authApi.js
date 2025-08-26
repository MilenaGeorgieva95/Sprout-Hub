import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export const useLogin = () => {
  const abortRef = useRef(new AbortController());

  const login = async (email, password) => {
    const loginData = await request.post(
      `/login`,
      {
        email,
        password,
      },
      null,
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

  const register = async (username, avatarUrl, email, password) => {
    const registerData = await request.post(
      '/users',
      { username, avatarUrl, email, password },
      "",
      "",
      { signal: abortRef.current.signal }
    );
    return {...registerData, username, avatarUrl, email};
  };

  useEffect(() => {
    const abortController = abortRef.current;
    return () => abortController.abort();
  });

  return {
    register,
  };
};

export const useLogout = () => {
  const { sessionToken, userLogoutHandler } = useContext(UserContext);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!sessionToken) {
      return;
    }
    userLogoutHandler();
    try {
      request
        .get(`/logout`, null, sessionToken)
        .then(() => userLogoutHandler());
    } catch (error) {
      setError(error.message);
    }
  }, [sessionToken, userLogoutHandler]);

  return { isLoggedOut: !!sessionToken, error, setError };
};
