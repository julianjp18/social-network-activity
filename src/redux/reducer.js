import {
  ADD_COMMENT,
  ALL_COMMENTS,
  GET_COMMENTS,
  GET_POSTS,
} from './constants';

export const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      console.log(payload);
      return {
        ...state,
        post_comments: [...state.post_comments, payload.newComment],
        all_comments: [...payload.allComments, payload.newComment],
      };
    case ALL_COMMENTS:
      return {
        ...state,
        all_comments: payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        post_comments: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export default reducer;