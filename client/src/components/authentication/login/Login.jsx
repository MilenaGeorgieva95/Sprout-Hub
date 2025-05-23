import { useActionState, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../../api/authApi";
import { useUserContext } from "../../../contexts/UserContext";
import ErrorModal from "../../common/error-modal/ErrorModal";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useUserContext();
  const { login } = useLogin();

  const [error, setError] = useState("");
  const triggerError = (errorMessage) => {
    setError(errorMessage);
  };

  const loginHandler = async (previousState, formData) => {
    const formValues = Object.fromEntries(formData);

    try {
      const authData = await login(formValues.email, formValues.password);
      userLoginHandler(authData);
      navigate("/posts");
      return formValues;
    } catch (error) {
      triggerError(error.message);
    }
  };

  const [values, loginAction, isPending] = useActionState(loginHandler, {
    email: "",
    password: "",
  });

  return (
    <section>
      {error && (
        <div>
          <button onClick={triggerError}>Cause Error</button>
          <ErrorModal error={error} onClose={() => setError("")} />
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center maxHeight">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Sprout Hub"
            src="/icons/carrot-svgrepo-com.svg"
            className="mx-auto h-10 w-auto mb-3"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={loginAction} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isPending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 mb-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
