import { NextFunction, Request, Response } from 'express';
import detailsService from '../../services/details/detailsService';

const detailsController =async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log(req.params)
const {result}=await detailsService({email:req.params.email})
res.status(200).json({message:"OK",data:result})
  }catch(err:any){
next(err.message)
  }
};
export default detailsController;
