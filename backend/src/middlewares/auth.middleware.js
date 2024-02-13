import { userModel } from "../models/users.models.js";
import ApiError from "../utils/ApiError.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";


export const verifyJWT = AsyncHandler(async(req, res, next)=>{

   try {
    console.log("trying to verify")
     const token = await req.cookies?.AccessToken;
     const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
     if(!decoded){
         throw new ApiError(400,"Token not found");
     }
     console.log("decoded!!");
     const user = await userModel.findById(decoded._id);
     if(!user){
         throw new ApiError(400, "token expired");
     }
     console.log("user Founded");
     req.user = user;
     console.log("User has beem setted");
     next()
 
   } catch (error) {
        throw new ApiError(401,error?.message);
   }

})