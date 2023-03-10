import corn from 'node-cron';
import backupDB from '../../../child/child';

const dbBackup = () => {
  // Every day at midnight
  corn.schedule('0 0 * * *', () => backupDB());
};

export default dbBackup;
