const crypto = require('crypto');
const key = 'b685e42b'+'1253a1eedcf'+'6431fcc908ea1';
const str = 'multi_apk=0&uidHome=1001548&channel=xiaomi&sign=1543b9a8cb826597b5ccdb8e48964b09&version=2.4.0&token=e75b77af699b9d2417b4662f59d141cdce14ad8d&device_system_version=28&uid=1536237&app_name=ZhuoQu&emulator=0&device_name=MI6X&vpn=0&addtime=&client=android&page=1&device=5c749b842eca14PF5X2e9caaf54a2cd9&timestamp=1571917060';
// 创建一个hash对象
const md5 = crypto.createHash('md5');
//转对象
function getParamObj(str){
    let strArr = str.split('&');
    let obj = {};
    strArr.forEach(element => {
        let [key,value] = element.split('=');
        obj[key] = value;
    });
    return obj;
}
let obj = getParamObj(str);
console.log(obj);

//转字符串

function getParamString(obj){
    let tobeSignArr = []
    for (let key in obj) {
        if (key == 'sign') {
            continue
        }
        tobeSignArr.push([key,obj[key]]);
    }
    tobeSignArr.sort((a, b) => a[0].localeCompare(b[0]))
    let str2 = tobeSignArr.map(a => `${a[0]}=${a[1]}`).join('&');
    return str2;
}
let strRes = getParamString(obj);
console.log(strRes);
md5.update(strRes+key);
console.log(md5.digest('hex'));