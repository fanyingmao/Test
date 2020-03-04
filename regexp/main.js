let str = '-121';
let mRegExp = new RegExp(/^-?[1-9]\d*$/.source);
console.log(mRegExp.test(str));
