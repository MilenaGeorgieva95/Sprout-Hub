import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router";

const baseUrl = "/classes/posts";

export const usePosts = (triggerError) => {
  const [posts, setPosts] = useState([]);
  const [pending, setPending] = useState(false);
  const location = useLocation();
  const search = location.search;
  const queryParams = new URLSearchParams(search);
  const [error, setError] = useState("");

  useEffect(() => {
    setPending(true);
    try {
      request.get(baseUrl + `?${queryParams.toString()}`).then((data) => {
        setPending(false);
        setPosts(data);
      });
    } catch (error) {
      setError(error.message);
    }
  }, [search]);
  return { pending, posts, error, setError };
};

export const useCreatePost = () => {
  const { sessionToken } = useAuth();
  const create = (postData) => {
    postData.rating = 0;
    return request.post(baseUrl, postData, sessionToken);
  };
  return { create };
};
export const usePost = (postId) => {
  const [post, setPost] = useState({});
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    const searchParams = new URLSearchParams({
      // load: "author=_ownerId:users",
    });
    request
      .get(`${baseUrl}/${postId}?${searchParams.toString()}`)
      .then((data) => {
        setPending(false);
        setPost(data);
      });
  }, [postId]);
  return { pending, post };
};
export const useEditPost = () => {
  const { sessionToken } = useAuth();

  const edit = (postId, postData) =>
    request.put(`${baseUrl}/${postId}`, postData, sessionToken);
  return { edit };
};
export const useDeletePost = () => {
  const { sessionToken } = useAuth();

  const del = (postId) => request.del(`${baseUrl}/${postId}`, "", sessionToken);
  return { del };
};

export const useLatestPosts = (postId) => {
  const [latestPosts, setPosts] = useState([]);

  useEffect(() => {
    const PAGE_SIZE = 3;
    const searchParams = new URLSearchParams({
      // sortBy: "_createdOn desc",
      // pageSize: PAGE_SIZE,
      // select: "_id,imageUrl,title,category",
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then((postsData) => {
      const displayPosts = postsData?.filter((el) => el.objetId != postId);
      setPosts(displayPosts);
    });
  }, [postId]);
  return { latestPosts };
};

export const useMyPosts = () => {
  const [posts, setPosts] = useState([]);

  const { objetId:_id } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `_ownerId="${_id}"`,
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then(setPosts);
  }, [_id]);
  return {
    posts,
    setPosts,
  };
};

export const useAuthorsPosts = (authorId) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      // where: `_ownerId="${authorId}"`,
      // load: "author=_ownerId:users",
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then(setPosts);
  }, [authorId]);
  return {
    posts,
    setPosts,
  };
};
