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
