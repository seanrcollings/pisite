import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

export default class StatAPI {
  static getAllStats(callback) {
    this.statFetcher(baseURL + "/stats", callback);
  }

  static getStat(id, callback) {
    this.statFetcher(baseURL + `/stats/${id}`, callback);
  }

  static getStatData(id, callback) {
    this.statFetcher(baseURL + `/stats/${id}/data`, callback);
  }

  static statFetcher = (url, callback) => {
    axios
      .get(url)
      .then(response => {
        callback(response);
      })
      .catch(error => {
        // Find a better way to check for this
        if (error.response) {
          callback(error.response);
        } else {
          callback({ response: 500 });
        }
      });
  };
}
