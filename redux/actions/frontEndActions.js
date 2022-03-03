import { useSelector } from "react-redux";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../constants/frontEndConstants";

export const sidebarClose = () => async (dispatch) => {
  dispatch({ type: SIDEBAR_CLOSE });
};

export const sidebarOpen = () => async (dispatch) => {
  dispatch({ type: SIDEBAR_OPEN });
};
