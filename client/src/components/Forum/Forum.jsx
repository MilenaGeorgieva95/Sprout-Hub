import { useEffect, useState } from "react";
import SortBtn from "./SortBtn";
import styles from "./Forum.module.css";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost:3030/jsonstore/forum";
  useEffect(() => {
    fetch(baseUrl + "/posts")
      .then((res) => res.json())
      .then((data) => setPosts(Object.values(data)));
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Browse All Posts
        </h2>
        <div className={styles.subNavContainer}>
          <SortBtn />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className={"group relative " + styles.textContainer}
            >
              <img
                alt="plant"
                src="https://images.unsplash.com/photo-1563127673-b35a42ef206c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://images.unsplash.com/photo-1563127673-b35a42ef206c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div>
                    <p className="mt-1 text-sm text-gray-500">John Doe</p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
