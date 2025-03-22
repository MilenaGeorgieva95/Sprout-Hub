import { createContext } from "react";

export const UserContext = createContext({
  _id: "",
  email: "",
  username: "",
  accessToken: "",
  avatarUrl: "",
  userLoginHandler: () => null,
});
