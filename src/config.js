import dotenv from 'dotenv';


// init dotenv
dotenv.config();


export const APP_PORT = process.env.APP_PORT || 9527;
export const DB_CONNECTION = process.env.DB_CONNECTION;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'rsa_jwt.key';
export const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY || 'rsa_jwt.pub';
