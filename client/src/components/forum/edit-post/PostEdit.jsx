import { useNavigate, useParams } from "react-router";
import { useEditPost, usePost } from "../../../api/postsApi";

export default function PostEdit() {
  const { postId } = useParams();
  const { pending, post } = usePost(postId);
  const { edit } = useEditPost();
  const navigate = useNavigate();

  const formAction = async (formData) => {
    const postData = Object.fromEntries(formData);
    edit(postId, postData);
    navigate("/posts");
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-sans py-8 ">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Edit Your Gardening Post
        </h1>
        <form action={formAction}>
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
              defaultValue={post.title}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Text:
            </label>
            <textarea
              id="text"
              name="text"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              defaultValue={post.text}
            ></textarea>
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
              defaultValue={post.category}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL:
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              defaultValue={post.imageUrl}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
