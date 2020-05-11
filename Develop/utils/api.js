const axios = require("axios");
const api = {
  getUser(username) {
    var apiURL = "https://api.github.com/users/" + username;
    return axios.get(apiURL)
   
    .catch(function (error) {
      
      console.log(error);
    });
  }
};

module.exports = api;