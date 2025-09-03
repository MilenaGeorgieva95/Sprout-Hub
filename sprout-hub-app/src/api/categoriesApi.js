import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { request } from "../utils/requester";

const baseUrl = "/classes/posts";
const categoriesUrl = "/classes/categories";

export const useCategory = (category) => {
  const [posts, setPosts] = useState([]);
  const [pending, setPending] = useState(false);

  const queryParams = new URLSearchParams({
    where: `category LIKE "${category}"`,
  });

  useEffect(() => {
    setPending(true);
    try {
      request.get(`${baseUrl}?${queryParams.toString()}`).then((data) => {
        setPending(false);
        setPosts(data);
      });
    } catch (error) {
      alert(error.message);
    }
  }, [category]);
  return { pending, posts };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setPending(true);
    request
      .get(categoriesUrl)
      .then((data) => {
        if (isMounted) {
          setCategories(data || []);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err);
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) setPending(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, pending, error };
};