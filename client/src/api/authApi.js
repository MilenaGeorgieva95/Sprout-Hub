import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";
const baseUrl = "/users";

export const useLogin = () => {
  const abortRef = useRef(new AbortController());

  const login = async (email, password) => {
    const loginData = await request.post(
      `${baseUrl}/login`,
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
      `${baseUrl}/register`,
      { username, avatarUrl, email, password },
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

export const useLogout = () => {
  const { accessToken, userLogoutHandler } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    request
      .get(`${baseUrl}/logout`, null, accessToken)
      .then(() => userLogoutHandler());
  }, [accessToken, userLogoutHandler]);

  return { isLoggedOut: !!accessToken };
};
