import dotenv from 'dotenv';


// init dotenv
dotenv.config();

export const APP_PORT = process.env.APP_PORT || 9527;
export const BASE_URL = process.env.BASE_URL || '/myapp';
export const DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://localhost/myapp';
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'ssl/rsa_jwt.key';
export const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY || 'ssl/rsa_jwt.pub';
