import { SEARCH_NEWS } from "./types";

export const searchNews = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_NEWS,
    payload: text,
  });
};
