import config from 'config';
import jwt from 'jsonwebtoken';

const JWT_SECRET: string = config.get('jwt_secret_key');


const options = {
  expiresIn: '24h',
};

export const generateToken = (payload: any): string | void => {
  console.log(payload)
  const token = jwt.sign(payload, JWT_SECRET, options);
  if (!token) {
    console.error('Sign in Failed!');
    return;
  }
  return token;
};

export const verify = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    console.error((err as { message: string }).message);
  }
};
