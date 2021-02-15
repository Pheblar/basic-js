class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message.length > key.length) { key = key.padEnd(message.length, key) }
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') { key.splice(i, 0, ' ') }
      message[i] = message[i].charCodeAt();
      if (message[i] < 65 || message[i] > 90) {
        message[i] = String.fromCharCode(message[i])
      } else {
        message[i] = message[i] + (key[i].charCodeAt() - 65);
        if (message[i] > 90) {
          message[i] = 64 + (message[i] - 90);
        }
        message[i] = String.fromCharCode(message[i]);
      }
    }
    return message.join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage.length > key.length) { key = key.padEnd(encryptedMessage.length, key) }
    encryptedMessage = encryptedMessage.split('');
    key = key.toUpperCase().split('');
    for (let j = 0; j < encryptedMessage.length; j++) {
      if (encryptedMessage[j] === ' ') { key.splice(j, 0, ' ') }
      encryptedMessage[j] = encryptedMessage[j].charCodeAt();
      if (encryptedMessage[j] < 65 || encryptedMessage[j] > 90) {
        encryptedMessage[j] = String.fromCharCode(encryptedMessage[j]);
      } else {
        encryptedMessage[j] = encryptedMessage[j] - (key[j].charCodeAt() - 65);
        if (encryptedMessage[j] < 65) {
          encryptedMessage[j] = 91 - (65 - encryptedMessage[j]);
        }
        encryptedMessage[j] = String.fromCharCode(encryptedMessage[j]);
      }
    }
    return encryptedMessage.join('');
  }
}

module.exports = VigenereCipheringMachine;
