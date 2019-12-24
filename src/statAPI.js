import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default class StatAPI {
  static get(endpoint) {
    return axios.get(baseURL + endpoint);
  }
}
