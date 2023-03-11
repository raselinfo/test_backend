/* eslint-disable no-console */
import config from 'config';
import { server } from './app/app';
import connectDB from './db/db';

const PORT = config.get('port');

// TODO: install mongodb
connectDB()
  .then(() => {
    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
