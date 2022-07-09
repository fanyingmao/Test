import fetch from 'node-fetch';
const response = await fetch("https://test-api-zmdld.4399zmxy.com/admin/dailydata/homedata?serverId=3", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNTQzNWZkNDIwZDI0N2ZiOGRlYzMwMzBhMDNjOGQ1NCIsInVzZXJuYW1lIjoiNDM5OSIsInJvbGVJZCI6MSwiaWF0IjoxNjU3MjQ1MDE2LCJleHAiOjE2NTczMzE0MTZ9.C-TDmPBb-Ar-_pnCWqa-t0s6Gv0kHZjQijaqUSblV0t6UMesklhjAXIXR3R-nZn2V0dz7r5FYi3CkcNUHrEHPMqwvnn1feztZ9zxeofJ6P_YXlNLiCRIzl5vSD0cXc-s0DAY5lqbArUS-q4tsM8ff8758FrW73kbNFPT3D3aVT0",
    "if-none-match": "W/\"39a-Fgyo1kmS8Xb4JVaEFi5hj1Yxyr8\"",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "Admin-Token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNTQzNWZkNDIwZDI0N2ZiOGRlYzMwMzBhMDNjOGQ1NCIsInVzZXJuYW1lIjoiNDM5OSIsInJvbGVJZCI6MSwiaWF0IjoxNjU3MjQ1MDE2LCJleHAiOjE2NTczMzE0MTZ9.C-TDmPBb-Ar-_pnCWqa-t0s6Gv0kHZjQijaqUSblV0t6UMesklhjAXIXR3R-nZn2V0dz7r5FYi3CkcNUHrEHPMqwvnn1feztZ9zxeofJ6P_YXlNLiCRIzl5vSD0cXc-s0DAY5lqbArUS-q4tsM8ff8758FrW73kbNFPT3D3aVT0; serverId=3",
    "Referer": "https://test-api-zmdld.4399zmxy.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
const data = await response.json();
console.log(data)