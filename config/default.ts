import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT,
  mode: process.env.MODE,
  db_uri: process.env.DB_URI,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
};
