import { useEffect, useState } from "react";
import { request } from "../utils/requester";

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
