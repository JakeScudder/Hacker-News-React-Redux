import { SEARCH_NEWS } from "./types";

//Once this is called from the searchForm, this dispatches the type and the payload to the reducer
export const searchNews = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_NEWS,
    payload: text,
  });
};
