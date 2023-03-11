import config from 'config';
import jwt from 'jsonwebtoken';

const JWT_SECRET:string = config.get('jwt_secret_key');

interface Payload {
  user: string;
  password: string;
}

const options = {
  expiresIn: '1h',
};

export const signIn = (payload: Payload): string | void => {
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
    console.error((err as {message:string}).message);
  }
};
