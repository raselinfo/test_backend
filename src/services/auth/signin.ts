import bcrypt from "bcrypt"
import User from "../../models/User"
import { generateToken } from "../jwt"

const signIn=async({data}:{data:any})=>{
    try{
        console.log(data)
   const user=await User.findOne({email:data.email})
   if (!user) {
    throw new Error("User not found!");
   }

   const verify = await bcrypt.compare(data.password, user.password);
   console.log("verify",verify)
   if(!verify) {
    throw new Error("Password didn't Match.")
   }

   const token = generateToken({id:user._id});
   
    return {result:token}
}catch(err:any){
throw new Error(err.message)
}
}

export default signIn