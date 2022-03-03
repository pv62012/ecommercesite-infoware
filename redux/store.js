import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const bindMiddleware = (middleware) => {
  // if (process.env.NODE_ENV == "production") {
  return composeWithDevTools(applyMiddleware(...middleware));
  // }
  // return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type == HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};
const initialState = {};

export const initStore = () => {
  return createStore(reducer, initialState, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
