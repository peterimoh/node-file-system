const fs = require("fs");
const fetch = require("node-fetch");

const url = `http://jsonplaceholder.typicode.com/posts`;

//fetching data from the API
const headers = {
  "Content-Type": "application/json",
};

fetch(url)
  .then((response) => response.json(), {
    method: "GET",
    headers: "headers",
  })
  .then((data) => {
    //Convert a JavaScript object into a string and adding indentation to be arranged on new line
    const result = JSON.stringify(data, null, 2);
    //writing data to Posts.json
    fs.writeFile("./result/Posts.json", result, (err) => {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  });
