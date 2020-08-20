import { SEARCH_NEWS } from "../actions/types";

const initialState = {
  text: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
