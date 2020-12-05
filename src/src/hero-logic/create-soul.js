const CryptoJS = require("crypto-js");
const secretKey = '9a819eba36e6887b876d3b6a236917d725a1cb4a01113645690ab862791cd62b';
const delimiter = '-';

export function createSoul(
    name,
    level,
    heroClass,
    strength,
    protection,
    agility,
    magic
) {
    let str = [name, level, heroClass, strength, protection, agility, magic].join(delimiter)
    return CryptoJS.AES.encrypt(str, secretKey).toString();
}

export function decodeSoul(soul) {
    let bytes  = CryptoJS.AES.decrypt(soul, secretKey);
    let decodedString = bytes.toString(CryptoJS.enc.Utf8);
    let decodedArr = decodedString.split(delimiter)
    return {
        name: decodedArr[0],
        level: decodedArr[1],
        heroClass: decodedArr[2],
        strength: decodedArr[3],
        protection: decodedArr[4],
        agility: decodedArr[5],
        magic: decodedArr[6]
    };
}

// let createSoul = createSoul('dasd', 1, 'asd', 2, 3,4,5);
// console.log(createSoul);
// let decodedSoul = decodeSoul(createSoul);
// console.log(decodedSoul);