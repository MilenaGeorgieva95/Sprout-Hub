import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate, useParams } from "react-router";

import styles from "./PostDetails.module.css";
import { useDeletePost, usePost } from "../../../api/postsApi";
import LatestPosts from "./latestPosts/LatestPosts";
import useAuth from "../../../hooks/useAuth";
import AddComment from "../../comments/add-comment/AddComment";
import { useComments, useCreateComment } from "../../../api/commentsApi";
import { useOptimistic } from "react";
import { v4 as uuid } from "uuid";
import CommentsSection from "../../comments/comments-section/CommentsSection";
import { useCreateLike, useDeleteLike, useLikes } from "../../../api/likesApi";
import { capitalize } from "../../../utils/capitalize";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostDetails() {
  const { postId } = useParams();
  const { pending, post } = usePost(postId);

  const { del } = useDeletePost();
  const navigate = useNavigate();
  const { objectId: userId, username, avatarUrl } = useAuth();

  const {
    likes,
    likeId,
    isLiked,
    setIsLiked,
    setLikeId,
    pending: pendingLike,
  } = useLikes(postId, userId);

  const { create: createLike } = useCreateLike();
  const { delLike } = useDeleteLike();

  const isOwner = userId === post.ownerId?.objectId;
  const { create } = useCreateComment();
  const { comments, addNewComment } = useComments(postId);

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
    const content = formData.get("content");
    const newOptimisticComment = {
      objectId: uuid(),
      ownerId: userId,
      postId,
      content,
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
    const result = await create(postId, content);
    addNewComment({
      ...result,
      content,
      author: { username, userId, avatarUrl },
    });
  };

  const likeHandler = () => {
    createLike(postId, setLikeId);
    setIsLiked(true);
  };
  const dislikeHandler = () => {
    delLike(likeId);
    setIsLiked(false);
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

        <div className="mx-auto px-4 pt-10  sm:px-6 lg:px-8 lg:pt-16 ">
          <div className={styles.postSection}>
            <h1 className={styles.postTitle}>{post.title}</h1>
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
                  {likes.length} likes
                </Link>
              </div>
            </div>

            <section className="mt-10">
              <div className="author-card">
                <div className="avatar-md">
                  <img
                    alt="author avatar image"
                    src={post.author?.avatarUrl}
                    className="group-hover:opacity-75"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Post written by:{" "}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {capitalize(post.author?.username)}
                </p>
              </div>
            </section>
          </div>
          <section className={styles.postSection}>
            <div>
              <h3>Category: </h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{post.category}</p>
              </div>
            </div>
            <div className={styles.postTextContainer}>
              <div>
                <h3>Description: </h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{post.text}</p>
                </div>
              </div>
              <div>
                <h3>Details: </h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{post.details}</p>
                </div>
              </div>
            </div>
                      <div className="mt-10">
            <div className="mt-10 flex items-center justify-start gap-x-6">
              {isOwner ? (
                <>
                  <Link
                    to={`/posts/${post.objectId}/edit`}
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
                username && (
                  <>
                    {isLiked ? (
                      <button
                        disabled={pendingLike}
                        onClick={dislikeHandler}
                        className={
                          "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                          styles.detailsBtn
                        }
                      >
                        Dislike
                      </button>
                    ) : (
                      <button
                        disabled={pendingLike}
                        onClick={likeHandler}
                        className={
                          "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                          styles.detailsBtn
                        }
                      >
                        Like
                      </button>
                    )}
                  </>
                )
              )}
            </div>
          </div>
          </section>


        </div>

        <div className={"bg-white py-24 sm:py-32 "+styles.postSection}>
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            {username && (
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                  Add New Comment
                </h2>
                <AddComment
                  onCreate={commentsCreateHandler}
                  username={capitalize(username)}
                />
              </div>
            )}
            <CommentsSection commentsData={optimisticComments} />
          </div>
        </div>
      </div>
    </div>
  );
}
