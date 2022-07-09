import fetch from 'node-fetch';
const response = await fetch("https://api.github.com/repos/node-fetch/node-fetch/pulls?per_page=1", {
    "referrerPolicy": "unsafe-url",
    "body": null,
    "method": "GET"
  });
const data = await response.json();
console.log(data)