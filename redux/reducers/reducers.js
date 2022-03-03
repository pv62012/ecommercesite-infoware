import { combineReducers } from "redux";
import { frontEndReducers } from "./frontEndReducers";
const reducers = combineReducers({
  frontEnd: frontEndReducers,
});

export default reducers;
