/* eslint-disable @typescript-eslint/no-explicit-any */
import { HASHING_KEY } from "@/config/constant";
import * as CryptoJS from "crypto-js";
 
const encryption = (value:string):string => {
  if(!value){
    return value;
  }
  const key: any = CryptoJS.enc.Utf8.parse(HASHING_KEY);
  const encrypted: any = CryptoJS.AES.encrypt(value, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).ciphertext;
  const encryptedBase64: string = CryptoJS.enc.Base64.stringify(encrypted);
  return encryptedBase64;
}
 
const decryption = (value:string):string => {
  if(!value){
    return value;
  }
  const key: any = CryptoJS.enc.Utf8.parse(HASHING_KEY);
  const decrypted:any = CryptoJS.AES.decrypt(value,key,{
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    }
  );
  const decryptedText: string = decrypted.toString(CryptoJS.enc.Utf8);
  return decryptedText;
}
 
export {
  encryption,
  decryption
}