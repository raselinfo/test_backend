import { NextFunction, Request, Response } from 'express';
import signInService from '../../services/auth/signin';

const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { result } = await signInService({ data: req.body });
    res.status(200).json({ message: 'OK', data: result });
  } catch (err: any) {
    return next(err.message);
  }
};
export default signInController;
