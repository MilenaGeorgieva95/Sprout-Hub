import { useMyPosts } from "../../../api/postsApi";
import GreenLogoBar from "../../common/logo-bars/green-logo-bar/GreenLogoBar";
import Spinner from "../../common/spinner/Spinner";
import TopPicksBar from "../../common/top-picks/TopPicksBar";
import ForumPosts from "../catalog/ForumPosts";

export default function MyPosts() {
  const { pending, posts } = useMyPosts();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">
            Browse Your Posts
          </h2>

          {pending ? <Spinner /> : <ForumPosts posts={posts} />}
        </div>
      </div>
      <GreenLogoBar />
      <TopPicksBar />
    </>
  );
}
