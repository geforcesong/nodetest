var CryptoJS = require("crypto-js");


var ciphertext = CryptoJS.AES.encrypt('7b6e8395f44723ec6bccfb0b32104b28', 'wx5073fa9d46c2d3e6gg2023').toString();

console.log('ciphertext', ciphertext);

var bytes  = CryptoJS.AES.decrypt(ciphertext, 'wx5073fa9d46c2d3e6gg2023');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log('originalText', originalText);
