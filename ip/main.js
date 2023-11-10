var IPDB = require('ipdb');
var qqwry_ipdb = require('qqwry.ipdb');
var ipdb = new IPDB(qqwry_ipdb);
var ip = "59.125.39.0";
var res1 = ipdb.find(ip);


var lbs = require('node-qqwry');
var res = lbs.getAddress(ip)[0];
if (res.indexOf('香港') != -1 || res.indexOf('澳门') != -1 || res.indexOf('台湾') != -1) {
    res = '中国' + res;
} else if (res.indexOf('省') != -1) {
    res = res.slice(0, res.indexOf('省'));
} else if (res.indexOf('市') != -1) {
    res = res.slice(0, res.indexOf('市'));
}
console.log(res);
