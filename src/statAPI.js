import axios from "axios";

class StatAPI {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === "development"
        ? "http://192.168.0.4"
        : "http://api.pisite.seanrcollings.com";
  }

  get(endpoint) {
    return axios.get(this.baseURL + endpoint);
  }
}

const statAPI = new StatAPI();
export default statAPI;
