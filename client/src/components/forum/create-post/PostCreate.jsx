import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router";
import { useCreatePost } from "../../../api/postsApi";

export default function PostCreate() {
  const navigate = useNavigate();
  const { create } = useCreatePost();

  const formSubmit = async (values) => {
    try {
      const newPost = await create(values);
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
      imageUrl: "",
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
              id="imageUrl"
              name="imageUrl"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              onChange={changeHandler}
              value={values.imageUrl}
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
