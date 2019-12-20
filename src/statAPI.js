import axios from "axios";

class StatAPI {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === "development"
        ? "http://192.168.0.4"
        : "http://api.pisite.seanrcollings.com";
  }

  async get(endpoint, callback) {
    const result = await axios.get(this.baseURL + endpoint);
    callback(result);
  }
}

const statAPI = new StatAPI();
export default statAPI;
