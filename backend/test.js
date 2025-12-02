import {Pool} from 'pg';
import express from 'express';

const router = express.Router();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sunga',
  password: '123321',
  port: 5432,
}); 

const testDBConnection = async () => {
     const client = await pool.connect();
    try{
       
        const testData= await client.query('SELECT * FROM users;');
        console.log('Database connected:', testData.rows[0]);
   
    } 

    catch(err){
        console.log(err)
    }
    finally{
        client.release()
    }
}
testDBConnection()