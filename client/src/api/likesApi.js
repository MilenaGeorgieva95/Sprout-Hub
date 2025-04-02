import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = "/data/likes";

export const useLikes = (postId, userId) => {
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const searchParams = new URLSearchParams({
      where: `postId="${postId}"`,
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then((data) => {
      setLikes(data);
      if (userId) {
        const userLike = data.find((el) => el._ownerId === userId);
        if (userLike) {
          setIsLiked(true);
        }
      }
      setPending(false);
    });
  }, [postId, userId]);
  return { likes, setLikes, isLiked, setIsLiked, pending };
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
