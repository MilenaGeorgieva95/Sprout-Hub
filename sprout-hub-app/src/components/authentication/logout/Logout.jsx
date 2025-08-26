import { useLogout } from "../../../api/authApi";
import { Navigate } from "react-router";

export default function Logout() {
  const { isLoggedOut, error, setError } = useLogout();
  const triggerError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <>
      {error && (
        <div>
          <button onClick={triggerError}>Cause Error</button>
          <ErrorModal error={error} onClose={() => setError("")} />
        </div>
      )}
      <h1>Logout page</h1>
      {isLoggedOut ? <Navigate to="/" /> : null}
    </>
  );
}
