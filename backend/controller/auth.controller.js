import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwtMaster from '../auth/jwtSigner.js';

class AuthController {
  async login(req, res) {
    const { identifier, password } = req.body;

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(identifier)) {
      const user = await UserModel.getUserByUserEmail(identifier);
      if (!user)
        return res.status(401).json({ message: "Invalid credentials" });

      const isUser = bcrypt.compareSync(password, user.password);


      if (!isUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

     const token =  jwtMaster.masterSign({ id: user.id, email: user.email,username:user.businessname });
      res.cookie('auth_token', token, { httpOnly: true, secure: true, sameSite: 'Strict',maxAge: 3600000 });
      res.status(200).json({businessname:user.businessname,id:user.id,})
    }
    
    
    else {
      const user = await UserModel.getUserByUserNumber(identifier);

      const isUser = bcrypt.compareSync(password, user.password);

      if (!isUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

        const token =  jwtMaster.masterSign({ id: user.id, email: user.email,username:user.businessname });
      res.cookie('auth_token', token, { httpOnly: true, secure: true, sameSite: 'Strict',maxAge: 3600000 });
      res.status(200).json({businessname:user.businessname,id:user.id,})
    }
  }
  async signup(req, res) {
  
    let { businessname, phoneNumber, email, password, termsAccepted,location } = req.body;
    if (!email) email = "not asigened";
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await UserModel.createUser(
      businessname,
      phoneNumber,
      email,
      hashedPassword,
      termsAccepted,
      location
    );
    console.log("New user id:", userId);

    res.status(200).json({ message: "Signup successful" });
  }

  async me(req, res) {
  const auth_token= req.cookies['auth_token'];
  if(!auth_token){
    return res.status(401).json( {message:'unauthenticated'})
  }

  try{
    const decoded = jwtMaster.masterVerify(auth_token);
    res.status(200).json({id:decoded.id,email:decoded.email,businessname:decoded.username});
    }
    catch(err){

      res.status(401).json({message:'unauthenticated'})
    } 
  }
}

export default new AuthController();
