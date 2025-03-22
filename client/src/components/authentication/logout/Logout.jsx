import { useContext, useEffect } from "react";

import { UserContext } from "../../../contexts/UserContext";
import { useLogout } from "../../../api/authApi";
import { useNavigate } from "react-router";

export default function Logout() {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const logout = useLogout(userCtx);
  useEffect(() => {
    try {
      logout().then(userCtx.userLoginHandler({}));
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <></>;
}
