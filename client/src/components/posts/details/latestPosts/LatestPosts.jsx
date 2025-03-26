import { useParams } from "react-router";
import { useLatestPosts } from "../../../../api/postsApi";
import PostCard from "./postCard";

export default function LatestPosts() {
  const { postId } = useParams();
  const { latestPosts } = useLatestPosts();
  const displayPosts = latestPosts.filter((el) => el._id != postId);

  return (
    <>
      {displayPosts.length >= 2 ? (
        <>
          {" "}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
            <PostCard post={displayPosts[0]} />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
            <PostCard post={displayPosts[1]} />
          </div>{" "}
        </>
      ) : null}
    </>
  );
}
