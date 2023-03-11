import { addToCache, getToCache } from '../../cache/cache';
import User from '../../models/User';

const detailsService = async ({ email }: { email: string }) => {
  try {
    const cacheData = await getToCache(email)
    if (cacheData) {
      return { result: cacheData }
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found!');
    }
    addToCache(email, JSON.stringify(user))
    return { result: user };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default detailsService;
