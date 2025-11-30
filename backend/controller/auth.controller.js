class AuthController {
    async login(req, res) {
            console.log(req.body);
     res.status(200).json({ message: 'Login successful' });
    }
       async signup(req, res) {

     res.status(200).json({ message: 'Signup successful' });
    }
}

export default new AuthController;