import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";
import { request } from "../utils/requester";

const baseUrl = "/classes/postcomments";

function commentsReducer(state, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "GET_ALL":
      return action.payload;
    default:
      return state;
  }
}

export const useComments = (postId) => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  const { sessionToken } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      // where: `postId="${postId}"`,
      // load: "author=_ownerId:users",
    });
    request
      .get(`${baseUrl}?${searchParams.toString()}`)
      .then((result) => dispatch({ type: "GET_ALL", payload: result }));
  }, [sessionToken, postId]);
  return {
    comments,
    addNewComment: (commentData) =>
      dispatch({ type: "ADD_COMMENT", payload: commentData }),
  };
};

export const useCreateComment = () => {
  const { sessionToken, objectId, username, avatarUrl } = useAuth();
  const create = (postId, content) => {
    const body = {
      ownerId: {
        __type: "Pointer",
        className: "_User",
        objectId,
      },
      content,
      postId: {
        __type: "Pointer",
        className: "posts",
        objectId: postId,
      },
      author: {
        username,
        avatarUrl,
      },
    };
    return request.post(baseUrl, body, sessionToken);
  };
  return { create };
};
