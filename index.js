'use strict';

const crypto = require('crypto');

const ENCRYPTION_KEY = '..'; 
const IV_LENGTH = 16; 

function decrypt(text) {
    let textParts = text.split(':');
    let iv = new Buffer(textParts.shift(), 'hex');
    let encryptedText = new Buffer(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);
    console.log(decrypted.toString());

}

decrypt('your encypted text goes here');

