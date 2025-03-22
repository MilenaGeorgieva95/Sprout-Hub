import GreenLogoBar from "../../common/logo-bars/green-logo-bar/GreenLogoBar";
import TopPicksBar from "../../common/top-picks/TopPicksBar";
import useFetch from "../../../hooks/usefetch";
import Spinner from "../../common/spinner/Spinner";
import ForumPosts from "./ForumPosts";

export default function Forum() {
  const baseUrl = "http://localhost:3030/jsonstore/forum/posts";
  const [pending, postsData] = useFetch(baseUrl, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">
            Browse All Posts
          </h2>

          {pending ? <Spinner /> : <ForumPosts posts={postsData} />}
        </div>
      </div>
      <GreenLogoBar />
      <TopPicksBar />
    </>
  );
}
