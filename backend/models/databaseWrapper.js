import {Pool} from 'pg'

const pool=   new Pool({
    user:'frendo',
    host:'localhost',
    database:'sunga',
    password:'ThisIsAPassword1234!!',
    max: 20,

})

class DatabaseWrapper { 
    constructor(dbClient) {
        this.dbClient = dbClient;
    }   
    async query(sql, params) {
    }
    async  execute(sql,params){

    }
}