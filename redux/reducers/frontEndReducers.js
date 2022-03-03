import {
  SIDEBAR_CLOSE,
  SIDEBAR_FUNCTION,
  SIDEBAR_OPEN,
} from "../constants/frontEndConstants";

export const frontEndReducers = (state = { open: false }, action) => {
  console.log("====================================");
  console.log(action);
  console.log("====================================");
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        open: true,
      };
    case SIDEBAR_CLOSE: {
      return {
        ...state,
        open: false,
      };
    }
    case SIDEBAR_FUNCTION:
      return {
        ...state,
        open: action.open,
      };
    default:
      return state;
  }
};
