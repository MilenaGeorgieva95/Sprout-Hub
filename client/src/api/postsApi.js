import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = "/data/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    request.get(baseUrl).then((data) => {
      setPending(false);
      setPosts(data);
    });
  }, []);
  return { pending, posts };
};

export const useCreatePost = () => {
  const { accessToken } = useAuth();
  const create = (postData) => {
    return request.post(baseUrl, postData, accessToken);
  };
  return { create };
};
export const usePost = (postId) => {
  const [post, setPost] = useState({});
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    request.get(`${baseUrl}/${postId}`).then((data) => {
      setPending(false);
      setPost(data);
    });
  }, [postId]);
  return { pending, post };
};
export const useEditPost = () => {
  const { accessToken } = useAuth();

  const edit = (postId, postData) =>
    request.put(`${baseUrl}/${postId}`, postData, accessToken);
  return { edit };
};
export const useDeletePost = () => {
  const { accessToken } = useAuth();

  const del = (postId) => request.del(`${baseUrl}/${postId}`, "", accessToken);
  return { del };
};

export const useLatestPosts = (postId) => {
  const [latestPosts, setPosts] = useState([]);

  useEffect(() => {
    console.log("details");

    const PAGE_SIZE = 3;
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: PAGE_SIZE,
      select: "_id,imageUrl,title",
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then(setPosts);
  }, []);
  return { latestPosts };
};
