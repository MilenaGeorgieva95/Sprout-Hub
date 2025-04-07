import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = "/data/likes";

export const useLikes = (postId, userId) => {
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");
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
          setLikeId(userLike._id);
        }
      }
      setPending(false);
    });
  }, [likeId, isLiked]);
  return { likes, likeId, isLiked, setIsLiked, pending, setLikeId };
};

export const useCreateLike = () => {
  const { accessToken, _id } = useAuth();
  const create = (postId, setLikeId) => {
    const body = {
      _ownerId: _id,
      postId,
    };
    request.post(baseUrl, body, accessToken).then((result) => {
      setLikeId(result._id);
      return result;
    });
  };
  return { create };
};

export const useDeleteLike = () => {
  const { accessToken } = useAuth();

  const delLike = (likeId) =>
    request.del(`${baseUrl}/${likeId}`, "", accessToken);
  return { delLike };
};
