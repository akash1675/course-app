import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req,resp) => {
   try{
      const {fullname, email, password} = req.body;
      const user = await User.findOne({email});
      if(user){
         return resp.status(400).json({message:"user already exists"});
      }
      const hashpassword =await bcryptjs.hash(password, 10);
      const createdUser = new User({
         fullname,
         email,
         password:hashpassword,
      });
      await createdUser.save();
      resp.status(201).json({message:"user created successfully",user:{
         _id: createdUser._id,
         fullname: createdUser.fullname,
         email: createdUser.email
      }});
   }
   catch(error){
      console.log("ERROR: " + error.message);
      resp.status(500).json({message:"interal srver error"});
   }
};

export const login =async (req, resp) => {
   try{
      const {email, password} = req.body;
      const user = await User.findOne({email});
      const isMatch = await  bcryptjs.compare(password, user.password);
      if(!user || !isMatch){
         return resp.status(400).json({message:"Invalid username or Password"});
      }
      else{
         resp.status(200).json({message:"Login successfully", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
         }})
      }
   }
   catch(error){
      console.log("Error :" + error.message);
      resp.status(500).json({message:"Internal server error"});
   }
}