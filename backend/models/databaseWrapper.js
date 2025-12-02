import {Pool} from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sunga_db',
  password: '123321',
  port: 5432,
}); 


class Wrapper{
         constructor(){
            this.pool= pool;
            this.query=this.query.bind(this);
         }
         async query(sql, params) {
            if(!sql|| sql.length===0){
                return null
            }
            if(!params){
                params=[]
            }
            const client = await this.pool.connect();
            try{
                const results= await client.query(sql, params);
                return results
            }
            catch(err){
                console.log(err)
            }
            finally{
                client.release()
            }
         }
}
console.log('Database Wrapper initialized');

export default new Wrapper();