import db from './databaseWrapper.js'


const Tables ={
    users: 'users'
}

class UserModel{

    constructor(){
       this.db=  db
    

   
    }

    async createUser(businessname, number, email, hashedPassword, location){
        const sql= `INSERT INTO ${Tables.users} (businessname,number,email, password,location) VALUES ($1, $2, $3, $4, $5) RETURNING id`
        const params= [businessname, number, email, hashedPassword, location]
         try{
            await this.db.query (sql, params)
         }
         catch(err){
            console.log(err)
         }
     
    }
    async getUserByUserEmail(email){

        const sql= `SELECT * FROM ${Tables.users} WHERE email=$1`
        const params= [email]
        const results= await this.db.query (sql, params)
     
        return results.rows[0]
    }
        async getUserByUserNumber(number){
        const sql= `SELECT * FROM ${Tables.users} WHERE number=$1`
        const params= [number]
        const results= await this.db.query (sql, params)
        return results.rows[0]
    }
}



export default new UserModel();