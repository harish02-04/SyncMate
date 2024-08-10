const fs = require('fs');
const crypto = require('crypto');

// Read the image file
const imageBuffer = fs.readFileSync('sign.jpg');

// Generate a random initialization vector (IV)
const iv = crypto.randomBytes(16);

// Generate a random key
const key = crypto.randomBytes(32);

// Create a cipher object using the key and IV
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

// Encrypt the image data
const encryptedImage = Buffer.concat([cipher.update(imageBuffer), cipher.final()]);

// Write the encrypted data to a new file
fs.writeFileSync('encrypted_image.jpg', encryptedImage);

console.log('Image encrypted successfully.');
