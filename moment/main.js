var moment = require('moment'); 
var res = new Date().setHours(0,0,0,0) - 30*24*3600*1000;
// var res = moment('20220906','YYYYMMDD',true).unix();
console.log(res);