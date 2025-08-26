import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function GuestGuard() {
  const { email } = useAuth();
  const isAuth=!!email
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
}