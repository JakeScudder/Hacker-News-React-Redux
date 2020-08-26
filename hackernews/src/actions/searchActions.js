import { SEARCH_NEWS, SAVE_SEARCH } from "./types";

//Once this is called from the searchForm, this dispatches the type and the payload to the reducer
export const searchNews = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_NEWS,
    payload: text,
  });
};

export const saveSearch = (text) => (dispatch) => {
  dispatch({
    type: SAVE_SEARCH,
    payload: text,
  });
};
