import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config'
class JwtModule {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    masterSign(payload) {
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    }

    masterVerify(token) {
        try {
            return jwt.verify(token, this.secret);
        } catch (err) {
            return null;
        }
    }
}

const jwtModule = new JwtModule();


export default jwtModule;   