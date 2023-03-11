import { NextFunction, Request, Response } from 'express';
import { cache } from 'joi';
import signUP from '../../services/auth/signUp';

const signupController =async (req: Request, res: Response, next: NextFunction) => {
  try{
    const {result} =await signUP({data:req.body})
    return res.status(201).json({message:"User Created",data:result})
  }catch(err:any){
    // res.status(501).json({error:err.message})
    return next(err.message)
  }
};
export default signupController;
