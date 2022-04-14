// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "9cce776c92fc4040971a179dcb60ff16";
const redirectUri = "https://spotify-clone-b357f.web.app";

//Assigning scopes to the application, not providing delete permission
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;


  // d7278d10755f4ea2ab0502f56f522952
  // 9cce776c92fc4040971a179dcb60ff16