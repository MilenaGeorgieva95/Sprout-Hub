import { useParams } from "react-router";
import { useLatestPosts } from "../../../../api/postsApi";
import PostCard from "./postCard";

export default function LatestPosts() {
  const { postId } = useParams();
  const { latestPosts } = useLatestPosts(postId);
  console.log(latestPosts);

  return (
    <>
      {latestPosts.length >= 2 ? (
        <>
          {" "}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
            <PostCard post={latestPosts[0]} />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
            <PostCard post={latestPosts[1]} />
          </div>{" "}
        </>
      ) : null}
    </>
  );
}
