import UserModel from "../models/user.js";


       
import bcrypt from 'bcrypt';


class AuthController {


    async login(req, res) {
      
    const{identifier, password}= req.body
  const user  =await UserModel.getUserByUserEmail(identifier)
    const isUser= bcrypt.compareSync(password, user.password)
    console.log(isUser)
    if(!isUser){
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    


     res.status(200).json({ message: 'Login successful' });
    }
       async signup(req, res) {
        console.log(req.body)
      const{businessname, phoneNumber, email, password, location}= req.body

      const hashedPassword= await bcrypt.hash(password, 10)
      const userId= await UserModel.createUser(businessname, phoneNumber , email, hashedPassword, location)
      console.log( 'New user id:', userId);


     res.status(200).json({ message: 'Signup successful' });
    }


}

export default new AuthController;