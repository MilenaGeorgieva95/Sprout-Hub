import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useAuth() {
  const {
    _id,
    email,
    username,
    avatarUrl,
    accessToken,
    userLoginHandler,
    userLogoutHandler,
  } = useContext(UserContext);
  return {
    _id,
    email,
    username,
    avatarUrl,
    accessToken,
    userLoginHandler,
    userLogoutHandler,
  };
}
