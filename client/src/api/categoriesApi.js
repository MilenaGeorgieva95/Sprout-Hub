import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { request } from "../utils/requester";

const baseUrl = "/data/posts";

export const useCategory = (category) => {
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState(false);
    
    const queryParams = new URLSearchParams({
      where: `category LIKE "${category}"`
    });
    
    useEffect(() => {
      setPending(true);
      request.get(`${baseUrl}?${queryParams.toString()}`).then((data) => {
        setPending(false);
        setPosts(data);
      });
    }, [category]);
    return { pending, posts };
  };