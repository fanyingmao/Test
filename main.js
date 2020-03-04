const md5 = require('md5-node');
const secretkey = 'tgOQo505EnzcU3PY';

let data = {"cid":"811541","cgid":"10003847","uid":"221890","pid":"162520","sid":"17977283869717077107","stime":"1568188397","os":"0","idfa":"","mac":"3085D5BDF2182900C4B3A2016B6F9900","imei":"38A72B151D1E7471A120092C392EF529","aid":"zhiketiantian","channelId":"10000236","__S2S__":"1","sign":"AE71AC7EDFEAE2FE37D9E093CD4F48A8"}
data.even_type = 1;
data.clientid = "ee11d8959930c5b32aba3d6d683a02d9";
data.ts = "";

let param = {
    clientid:data.clientid,
    sid:data.sid,
    stime:data.stime,
    cid:data.cid,
    os:data.os,
    idfa:data.idfa,
    mac:data.mac,
    imei:data.imei,
    ts:data.ts,
    even_type:data.even_type,
}
let paramStr = Object.keys(param).sort().map(key=>`${key}=${param[key]}`).join('&');
data.sign=md5(paramStr+ secretkey).toUpperCase();

console.log('data = ' + JSON.stringify(data));
let callback_url = `http://c2.wkanx.com/tracking?${paramStr}&sign=${data.sign}`;
console.log(callback_url);