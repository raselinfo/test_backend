import User from "../../models/User"

const detailsService=async({email}:{email:string})=>{
    try{
        console.log(email)
        const user=await User.findOne({email})
        if(!user){
            throw new Error("User not found!")
        }

        return {result:user}
    }catch(err:any){
        throw new Error(err.message)
    }

}

export default detailsService