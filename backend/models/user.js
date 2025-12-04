import db from './databaseWrapper.js'


const Tables ={
    users: 'users'
}

class UserModel{

    constructor(){
       this.db=  db
    

   
    }

    async createUser(businessname, number, email, hashedPassword,termsAccepted, location){
     
        
        const sql= `INSERT INTO ${Tables.users} (businessname,number,email, password,term_condtions,location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`
        const params= [businessname, number, email, hashedPassword,termsAccepted ,location]
        const results= await this.db.query (sql, params)
        return results.rows[0].id
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