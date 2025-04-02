import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router";

const baseUrl = "/data/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [pending, setPending] = useState(false);
  const location = useLocation();
  const search = location.search;
  const queryParams = new URLSearchParams(search);

  useEffect(() => {
    setPending(true);
    request.get(baseUrl + `?${queryParams.toString()}`).then((data) => {
      setPending(false);
      setPosts(data);
    });
  }, [search]);
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
    const searchParams = new URLSearchParams({
      load: "author=_ownerId:users",
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
    const PAGE_SIZE = 3;
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: PAGE_SIZE,
      select: "_id,imageUrl,title,category",
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then((postsData) => {
      const displayPosts = postsData.filter((el) => el._id != postId);
      setPosts(displayPosts);
    });
  }, [postId]);
  return { latestPosts };
};

export const useMyPosts = () => {
  const [posts, setPosts] = useState([]);

  const { _id } = useAuth();
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
