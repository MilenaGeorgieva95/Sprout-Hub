import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = "/data/likes";

export const useLikes = (postId) => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `postId="${postId}"`,
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then((data) => {
      setLikes(data);
    });
  }, [postId]);
  return { likes };
};

export const useIsLiked = (postId, userId) => {
  const [isLiked, setIsLiked] = useState([]);
  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `postId="${postId}" AND _ownerId="${userId}"`,
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then((data) => {
      setIsLiked(data);
    });
  }, [postId, userId]);
  return { isLiked };
};

export const useCreateLike = () => {
  const { accessToken, _id } = useAuth();
  const create = (postId) => {
    const body = {
      _ownerId: _id,
      postId,
    };
    return request.post(baseUrl, body, accessToken);
  };
  return { create };
};
