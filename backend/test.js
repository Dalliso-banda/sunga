import jwt from 'jsonwebtoken'
import  dotEnv from 'dotenv/config';


const testToken= jwt.sign({ id:1, email:"test@example.com" },process.env.JWT_SECRET , { expiresIn: '1h' });

console.log("Generated Test Token:", testToken);

const decoded= jwt.verify(testToken, process.env.JWT_SECRET);

console.log("Decoded Token Payload:", decoded);