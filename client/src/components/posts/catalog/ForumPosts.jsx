import SortBtn from "./SortBtn";
import styles from "./ForumPosts.module.css";
import { Link } from "react-router";

export default function ForumPosts({ posts }) {
  return (
    <>
      <div className={styles.subNavContainer}>
        <SortBtn />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className={"group relative " + styles.textContainer}
          >
            <img
              alt="plant"
              src={post.imageUrl}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link to={`/posts/${post._id}/details`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <div>
                  <p className="mt-1 text-m text-gray-500">{post.category}</p>
                </div>
              </div>
            </div>
            <Link
              to={`/posts/${post._id}/details`}
              className={
                "mt-6 flex w-full items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                styles.detailsBtn
              }
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
