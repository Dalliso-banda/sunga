import db from '../models/databaseWrapper.js'

class ClientModel {

    constructor() {
        this.db = db
        this.table= 'clients'
    }

 async uploadClientData(clientData) {
     if(!clientData){
      throw new Error('expected to get client databut recevied none')
     }
    
   
    const params =[clientData.client_name,clientData.client_email,clientData.client_number,clientData.client_NRC,clientData.collatral_item,clientData.date_collected,clientData.due_date,clientData.user_id,clientData.interestRate,clientData.total_amount,clientData.status]
    console.log(params.length)
     const sql = `INSERT INTO ${this.table} (client_name,client_email,client_number,client_nrc,collatral_item,date_collected,due_data,users_id,interest,total_amount,status) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11) RETURNING id`
     const query = await this.db.query(sql,params)
  }
  async getClientData(id){
   if(!id)
    return 'id was not provided'
     const sql =`select * from ${this.table} where users_id=${id}`
     const dbRes = await this.db.query(sql);
    const clients = dbRes.rows;

    return clients

   }
}
export default new ClientModel()