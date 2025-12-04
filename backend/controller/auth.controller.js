import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

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

      return res.status(200).json({ message: "Login successful" });
    } else {
      const user = await UserModel.getUserByUserNumber(identifier);

      const isUser = bcrypt.compareSync(password, user.password);

      if (!isUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      return res.status(200).json({ message: "Login successful" });
    }
  }
  async signup(req, res) {
    console.log(req.body.termsAccepted);
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
}

export default new AuthController();
