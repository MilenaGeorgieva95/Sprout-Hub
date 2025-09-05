import { UserContext } from "../../contexts/UserContext";
import useLocalStorage from "../../hooks/useLocalStorage";


export default function UserProvider({ children }) {
  const [authData, setLocalStorageUser] = useLocalStorage("auth", {});

  const userLoginHandler = (user) => {
    setLocalStorageUser(user);
  };
  const userLogoutHandler = () => {
    localStorage.clear();
    setLocalStorageUser({});
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}