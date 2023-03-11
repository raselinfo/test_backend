import bcrypt from 'bcrypt';
import User from '../../models/User';

const signUP = async ({ data }: { data: any }) => {
  try {
    const user = await User.findOne({ email: data.email });
    console.log(user);
    if (user) {
      throw new Error('User exist');
    }
    const hashPassword = await bcrypt.hash(data.password, 10);
    const newUSer = new User({
      name: data.name,
      email: data.email,
      password: hashPassword,
    });
    const savedUser = await newUSer.save();
    return { result: savedUser };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default signUP;
