const crypto = require('crypto');

let str = '';
// 创建一个hash对象
const md5 = crypto.createHash('md5');

let mapP = new Map();

mapP.set('multi_apk', 0);
mapP.set('uidHome', 1001548);
mapP.set('channel', 'yyb');
mapP.set('version', '2.3.0');
mapP.set('token', 'e75b77af699b9d2417b4662f59d141cdce14ad8d');
mapP.set('device_system_version', 27);
mapP.set('app_name', 'ZhuoQu');
mapP.set('emulator', 0);
mapP.set('device_name', 'MI6X');
mapP.set('addtime', '');
mapP.set('client', 'android');
mapP.set('page', 1);
mapP.set('device', '5c749b842eca14PF5X2e9caaf54a2cd9');
mapP.set('timestamp', 1552043922);

let arr = [];
for (const element of mapP) {
  arr.push(element[0] + '=' + element[1]);
}


str = arr.join('&');

console.log(str);
// 往hash对象中添加摘要内容
md5.update(str);

console.log(md5.digest('hex'));