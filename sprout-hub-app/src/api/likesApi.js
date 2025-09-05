import { useEffect, useState } from "react";
import { request } from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = "/classes/postlikes";

export const useLikes = (postId, userId) => {
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");
  const [pending, setPending] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setPending(true);
    const searchParam = `where={"postId":{"__type":"Pointer","className":"posts","objectId":"${postId}"}}`
    request
      .get(`${baseUrl}?${searchParam}`, "", "", { signal })
      .then((data) => {
        setLikes(data);
        if (userId) {
          const userLike = data.find((el) => el.ownerId.objectId === userId);
          if (userLike) {
            setIsLiked(true);
            setLikeId(userLike.objectId);
          }
        }
        setPending(false);
      });
    return controller.abort();
  }, [likeId, isLiked]);
  return { likes, likeId, isLiked, setIsLiked, pending, setLikeId };
};

export const useCreateLike = () => {
  const { sessionToken, objectId } = useAuth();
  const create = (postId, setLikeId) => {
    const body = {
      ownerId: {
        __type: "Pointer",
        className: "_User",
        objectId,
      },
      postId: {
        __type: "Pointer",
        className: "posts",
        objectId:postId
      },
    };
    request.post(baseUrl, body, sessionToken).then((result) => {
      setLikeId(result.objectId);
      return result;
    });
  };
  return { create };
};

export const useDeleteLike = () => {
  const { sessionToken } = useAuth();

  const delLike = (likeId) =>
    request.del(`${baseUrl}/${likeId}`, "", sessionToken);
  return { delLike };
};
