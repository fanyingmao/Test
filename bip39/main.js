const bip39 = require('bip39');
let words = bip39.generateMnemonic(256);
console.log(words);

async function main(){
    let seedBuffer = await bip39.mnemonicToSeed(words);
    let seedAsHex =  seedBuffer.toString('hex');
    // or use bip39.mnemonicToSeedHex(words)
    console.log(seedAsHex);
}
main();
