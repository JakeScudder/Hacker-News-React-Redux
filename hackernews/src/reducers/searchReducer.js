import { SEARCH_NEWS, SAVE_SEARCH, DELETE_SEARCH } from "../actions/types";

const initialState = {
  text: "",
  searchTerms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    //After leaving the root reducer, I want to have the text available inside the SearchForm this.props.text property;
    case SEARCH_NEWS:
      //returns the current state, with the new text value
      return {
        ...state,
        text: action.payload,
      };
    case SAVE_SEARCH:
      return {
        ...state,
        searchTerms: [...state.searchTerms, action.payload],
      };

    case DELETE_SEARCH:
      console.log("deleting");
      console.log(action.payload);
      return {
        ...state,
        searchTerms: state.searchTerms.filter(
          (item) => item !== action.payload
        ),
      };

    default:
      return state;
  }
}
