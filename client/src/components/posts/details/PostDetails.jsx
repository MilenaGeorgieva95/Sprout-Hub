import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate, useParams } from "react-router";

import styles from "./PostDetails.module.css";
import { useDeletePost, usePost } from "../../../api/postsApi";
import LatestPosts from "./latestPosts/LatestPosts";
import useAuth from "../../../hooks/useAuth";
import CommentsSection from "../../comments/comments-section/commentsSection";
import AddComment from "../../comments/add-comment/AddComment";
import { useComments, useCreateComment } from "../../../api/commentsApi";
import { useOptimistic } from "react";
import { v4 as uuid } from "uuid";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostDetails() {
  const { postId } = useParams();
  const { pending, post } = usePost(postId);
  console.log(post);

  const { del } = useDeletePost();
  const navigate = useNavigate();
  const { _id: userId, username, avatarUrl } = useAuth();
  const isOwner = userId === post._ownerId;
  const { create } = useCreateComment();
  const { comments, addNewComment } = useComments(postId);
  console.log(comments);

  const [optimisticComments, setOptimisticComments] = useOptimistic(comments);

  const onDelHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${post.title} post?`
    );
    if (!hasConfirm) {
      return;
    }
    del(postId);
    navigate("/posts");
  };

  const commentsCreateHandler = async (formData) => {
    const comment = formData.get("comment");
    const newOptimisticComment = {
      _id: uuid(),
      _ownerId: userId,
      postId,
      comment,
      pending: true,
      author: {
        username,
        avatarUrl,
      },
    };
    setOptimisticComments((oldComments) => [
      ...oldComments,
      newOptimisticComment,
    ]);
    const result = await create(postId, comment);
    addNewComment({ ...result, author: { username, userId, avatarUrl } });
  };

  return (
    <div className="bg-white maxHeight">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={post.title}
            src={post.imageUrl}
            className="hidden size-full rounded-lg object-cover lg:block"
          />

          <LatestPosts postId={postId} />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {post.title}
            </h1>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        post.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{post.rating} out of 5 stars</p>
                <Link
                  to={reviews.href}
                  className="mx-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} likes
                </Link>
              </div>
            </div>
            <p className="mt-3 text-2xl tracking-tight text-gray-900">
              Category: {post.category}
            </p>
          </div>

          <div className=" lg:row-span-3 lg:mt-0 group relative mx-3">
            <h2 className="sr-only">Author information</h2>
            <p className="text-3xl tracking-tight text-gray-900">Author</p>

            <form className="mt-10">
              <Link to={`/member/${post.author?._id}/posts`}>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {post.author?.username}
                  </h3>

                  <fieldset aria-label="Author Avatar Image" className="my-3">
                    <img
                      alt="author avatar image"
                      src={post.author?.avatarUrl}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                  </fieldset>
                </div>
              </Link>

              <Link
                to={`/member/${post.author?._id}/posts`}
                className={
                  "mt-10 flex w-full items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                  styles.detailsBtn
                }
              >
                View Author's Posts
              </Link>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{post.details}</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-10 flex items-center justify-start gap-x-6">
                {isOwner ? (
                  <>
                    <Link
                      to={`/posts/${post._id}/edit`}
                      className={
                        "mt-6 flex items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                        styles.detailsBtn
                      }
                    >
                      Edit
                    </Link>
                    <button
                      onClick={onDelHandler}
                      className={
                        "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                        styles.detailsBtn
                      }
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to={`/posts/${post._id}/like`}
                      className={
                        "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                        styles.detailsBtn
                      }
                    >
                      Like
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <CommentsSection commentsData={optimisticComments} />
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Add New Comment
              </h2>
              <AddComment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
