import { createContext} from "react";

export const UserContext = createContext({
  objectId: "",
  email: "",
  username: "",
  sessionToken: "",
  avatarUrl: "",
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
});