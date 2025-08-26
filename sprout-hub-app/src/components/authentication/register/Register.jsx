import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { useRegister } from "../../../api/authApi";
import { useUserContext } from "../../../contexts/UserContext";
import ErrorModal from "../../common/error-modal/ErrorModal";

const avatars = [
  {
    name: "avatar1",
    url: "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "avatar2",
    url: "https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "avatar3",
    url: "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Register() {
  const { register } = useRegister();
  const { userLoginHandler } = useUserContext();
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState("avatar1");
  const [customUrl, setCustomUrl] = useState("");

  const avatarOptionChangehandler = (e) => {
    setSelectedAvatar(e.target.value);
  };

  const [error, setError] = useState("");
  const triggerError = (errorMessage) => {
    setError(errorMessage);
  };

  const registerHandler = async (formData) => {
    const { username, avatar, email, password, rePassword } =
      Object.fromEntries(formData);

    if (password !== rePassword || password === "") {
      triggerError("Password mismatch!");
      return;
    }
    try {
      const avatarUrl =
        selectedAvatar === "custom"
          ? customUrl
          : avatars.find((el) => el.name === selectedAvatar).url;
      const authData = await register(username, avatarUrl, email, password);
      userLoginHandler(authData);
      navigate("/posts");
    } catch (error) {
      triggerError(error.message);
    }
  };

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
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={registerHandler} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="avatarUrl"
                className="pt-3 block text-sm/6 font-medium text-gray-900"
              >
                Avatar image
              </label>
              <div className="mt-2">
                <div>
                  <input
                    type="radio"
                    id="custom"
                    name="avatar"
                    value="custom"
                    checked={selectedAvatar === "custom"}
                    onChange={avatarOptionChangehandler}
                  />
                  <label className="px-2" htmlFor="custom">Custom URL</label>
                  {selectedAvatar === "custom" && (
                    <input
                      id="custom"
                      placeholder="Enter image URL"
                      name="avatar"
                      type="url"
                      value={customUrl}
                      onChange={(e) => {
                        setCustomUrl(e.target.value);
                      }}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  )}
                </div>
                {avatars.map((avatar) => {
                  return (
                    <div key={avatar.name}>
                      <input
                        type="radio"
                        name="avatar"
                        value={avatar.name}
                        checked={selectedAvatar === avatar.name}
                        onChange={avatarOptionChangehandler}
                      />
                      <img src={avatar.url} alt="avatar image" />
                    </div>
                  );
                })}
              </div>
            </div>

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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="rePassword"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Repeat Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  required
                  autoComplete="confirm-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 mb-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
