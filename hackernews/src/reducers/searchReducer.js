import { SEARCH_NEWS } from "../actions/types";

const initialState = {
  text: "",
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
    default:
      return state;
  }
}
