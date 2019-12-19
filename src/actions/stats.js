import axios from "axios";

import { SET_STATS, SWAP_DESCRIPTION } from "./types";

export function fetchStats() {
  return async function(dispatch, getState) {
    const url =
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:5000/stats/data"
        : "/stats/data";
    const response = await axios.get(url);
    dispatch({
      type: SET_STATS,
      payload: response.data
    });
  };
}

export function swapDescription(id) {
  return {
    type: SWAP_DESCRIPTION,
    payload: id
  };
}
