/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

// var request = require("request"); // "Request" library
import axios from "axios";

var client_id = "4502e73ed1b344df9e85c2ad64ce606b"; // Your client id
var client_secret = "6b95a388162440898c3ccfca2f05d363"; // Your secret

// your application requests authorization
// var authOptions = {
//   url: "https://accounts.spotify.com/api/token",
//   headers: {
//     Authorization:
//       "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
//   },
//   form: {
//     grant_type: "client_credentials",
//   },
//   json: true,
// };

class Spotify {
  static getAccessToken() {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
    });
    return axios.post("https://accounts.spotify.com/api/token", body, {
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        scope:
          "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
      },
    });
  }
}

class GetTrack {
  static getTrack(url: String, token: String, data: String) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      params: { q: data, type: "track" },
    });
  }
}

class GetCategories {
  static getCategories(url: String, token: String) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

class GetCategoriesById {
  static getCategoriesById(url: String, token: String) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      // params: { category_id: category },
    });
  }
}

class GetTrackByCategoriesById {
  static getTrackByCategoriesById(url: String, token: String) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      // params: { playlist_id: id },
    });
  }
}

class GetTrackById {
  static getTrackById(url: String, token: String) {
    return axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      // params: { playlist_id: id },
    });
  }
}

export {
  Spotify,
  GetTrack,
  GetCategories,
  GetCategoriesById,
  GetTrackByCategoriesById,
  GetTrackById,
};
