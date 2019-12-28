import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default class StatAPI {
  static getAllStats() {
    return axios.get(baseURL + "/stats");
  }

  static getStat(id) {
    return axios.get(baseURL + `/stats/${id}`);
  }

  static getStatData(id) {
    return axios.get(baseURL + `/stats/${id}/data`);
  }
}
