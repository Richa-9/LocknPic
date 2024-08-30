# LocknPic
A tool used to encrypt and decrypt the image made on NodeJS.

## Tech-Stack
NodeJS

### Installation

```sh
npm i -g .
```

### For encrypting an image myImage.png to encryptedImage.png and saving the key to key.txt

```sh
LocknPic -e myImage.png -i encryptedImage.png -p key.txt
```
### For decrypting an image encryptedImage.png with its key key.txt to decryptedImage.png

```sh
LocknPic -d encryptedImage.png -k key.txt -i decryptedImage.png
```

