import PostCard from "./postCard";

export default function LatestPosts({ post }) {
  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
        <PostCard post={post} />
        {/* <PostCard post={post} /> */}
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-6">
        <PostCard post={post} />
        {/* <PostCard post={post} /> */}
      </div>
    </>
  );
}
