import { Link, useParams } from "react-router";
import { useAuthorsPosts } from "../../../api/postsApi";
import GreenLogoBar from "../../common/logo-bars/green-logo-bar/GreenLogoBar";
import Spinner from "../../common/spinner/Spinner";
import TopPicksBar from "../../common/top-picks/TopPicksBar";
import ForumPosts from "../catalog/ForumPosts";

export default function AuthorsPosts() {
  const { authorId } = useParams();
  const { pending, posts } = useAuthorsPosts(authorId);
  const authorUsername = posts[0]?.author.username;
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          {authorUsername ? (
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">
              Browse Posts by {authorUsername}
            </h2>
          ) : (
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">
              This author doesn't have any posts at the moment.
            </h2>
          )}
          {posts.length > 0 ? (
            pending ? (
              <Spinner />
            ) : (
              <ForumPosts posts={posts} />
            )
          ) : (
            <p className="text-center">
              {" "}
              <Link to={"/posts"}>Find more posts on the Catalog Page.</Link>.
            </p>
          )}
        </div>
      </div>
      <GreenLogoBar />
      <TopPicksBar />
    </>
  );
}
