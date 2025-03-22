import { useContext } from "react";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function PostCreate() {
  const url = "http://localhost:3030/jsonstore/forum/posts";
  const userCtx = useContext(UserContext);
  const user = userCtx?.user;
  const navigate = useNavigate();

  const formSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        text: values.text,
        category: values.category,
        imgUrl: values.imgUrl,
        owner: user._id,
      }),
    };
    try {
      const res = await fetch(url, options);
      console.log(res);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    {
      title: "",
      text: "",
      category: "",
      imgUrl: "",
    },
    formSubmit
  );

  return (
    <div className="mt-5 text-gray-900 font-sans py-8 ">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Create a Gardening Post
        </h1>
        <form action={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              onChange={changeHandler}
              value={values.title}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Text:
            </label>
            <input
              id="text"
              name="text"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              onChange={changeHandler}
              value={values.text}
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              onChange={changeHandler}
              value={values.category}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="imgUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL:
            </label>
            <input
              type="url"
              id="imgUrl"
              name="imgUrl"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              onChange={changeHandler}
              value={values.imgUrl}
            />
          </div>

          <div className="text-center">
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
