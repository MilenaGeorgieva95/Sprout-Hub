import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { request } from "../utils/requester";

const baseUrl = "/data/posts";

export const useCategory = () => {
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState(false);
    const location = useLocation();
    const search = location.search;
    
    const queryParams = new URLSearchParams({
      where: `category="${search}"`
    });
    console.log(queryParams);
    
  
    useEffect(() => {
      setPending(true);
      request.get(`${baseUrl}?${queryParams.toString()}`).then((data) => {
        setPending(false);
        setPosts(data);
      });
    }, [search]);
    return { pending, posts };
  };