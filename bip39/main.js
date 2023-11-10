const bip39 = require('bip39');


async function main(){
    let words = bip39.generateMnemonic(256);
    // console.log(words);
    let seedBuffer = await bip39.mnemonicToSeed(words);
    let seedAsHex =  seedBuffer.toString('hex');
    // or use bip39.mnemonicToSeedHex(words)
    // console.log(seedAsHex);
}
let now = Date.now();
for(i = 0;i < 200000;i++){
    main();
}

console.log('time = ',Date.now() - now);
