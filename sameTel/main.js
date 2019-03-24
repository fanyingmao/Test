// let tel = [8, 2, 1, 0, 0, 9, 6, 5, 9, 6]; //测试号码
let tel = [8, 2, 0, 0, 6, 6, 7, 5, 9, 1]; //测试号码
let testNum = 100000000; //模拟测试次数
let noSame = 1; //不同的位数
let resNum = 0; //符合的个数
tel.sort();
for (let j = 0; j < testNum; j++) {
  let tem = [];
  let noSameTem = 0;
  let rand = Math.random();
  let mo = 1;
  for (let i = 0; i < tel.length; i++) {
    rand *= 10;
    tem.push(Math.floor(rand % 10));
    mo *= 10;
  }
  tem.sort();
  for (let i = 0; i < tel.length; i++) {
    if (tel[i] !== tem[i]) {
      noSameTem++;
    }
    if (noSameTem > noSame) {
      break;
    }
  }
  if (noSameTem === noSame) {
    resNum++;
  }
}
console.log(resNum / testNum);