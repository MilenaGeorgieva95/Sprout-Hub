import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useAuth() {
  const {
    objectId,
    email,
    username,
    avatarUrl,
    sessionToken,
    userLoginHandler,
    userLogoutHandler,
  } = useContext(UserContext);
  return {
    objectId,
    email,
    username,
    avatarUrl,
    sessionToken,
    userLoginHandler,
    userLogoutHandler,
  };
}
