import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useParams } from "react-router";

import styles from "./PostDetails.module.css";
import useFetch from "../../../hooks/usefetch";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const baseUrl = "http://localhost:3030/jsonstore/forum/posts/";

export default function PostDetails() {
  const { postId } = useParams();
  const [pending, postData] = useFetch(baseUrl, {}, postId);
  console.log(postData);

  return (
    <div className={"bg-white " + styles.mainContainer}>
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <img
            alt={postData.title}
            src={postData.imgUrl}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-3 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {postData.title}
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
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <Link
                  to={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </Link>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-3 lg:col-start-1  lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{postData.text}</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-4 space-b">
                <Link
                  to={`/posts/${postData._id}/edit`}
                  className={
                    "mt-6 flex items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                    styles.detailsBtn
                  }
                >
                  Edit
                </Link>
                <Link
                  to={`/posts/${postData._id}/delete`}
                  className={
                    "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                    styles.detailsBtn
                  }
                >
                  Delete
                </Link>
                <Link
                  to={`/posts/${postData._id}/comment`}
                  className={
                    "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                    styles.detailsBtn
                  }
                >
                  Comment
                </Link>
                <Link
                  to={`/posts/${postData._id}/like`}
                  className={
                    "mt-6 flex  items-center justify-center rounded-md px-8 py-3 text-base group-hover:opacity-75  btn btn-outline-primary " +
                    styles.detailsBtn
                  }
                >
                  Like
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
