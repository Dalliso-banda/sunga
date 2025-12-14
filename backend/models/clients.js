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
    
   
    const params =[clientData.client_name,clientData.client_email,clientData.client_number,clientData.client_NRC,clientData.collatral_item,clientData.date_collected,clientData.due_date,clientData.user_id,clientData.interestRate,clientData.total_amount,clientData.has_paid]
    console.log(params.length)
     const sql = `INSERT INTO ${this.table} (client_name,client_email,client_number,client_nrc,collatral_item,date_collected,due_data,users_id,interest,total_amount,has_paid) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11) RETURNING id`
     const query = await this.db.query(sql,params)
  }

  async getClientDataById(id){
   if(!id)
    return 'id was not provided'
     const sql =`select * from ${this.table} where id=${id}`
     const dbRes = await this.db.query(sql);
    const clients = dbRes.rows;

    return clients

   }


     async getClientsByUserId(id){
    
   if(!id)
    return 'id was not provided'
     const sql =`select * from ${this.table} where users_id=${id}`
     const dbRes = await this.db.query(sql);
    const clients = dbRes.rows;

    return clients

   }
   

   async clearDebt(clientId){
    console.log(clientId)
    if(!clientId){
      throw new Error('expected clientId but received none')
    }       

    const params=   [clientId]
    const sql = `UPDATE ${this.table} SET has_paid = true WHERE id = $1`
    const dbRes = await this.db.query(sql,params);
    return dbRes.rows;
  }

  async trackPayment(paymentDetails){
 
    if(!paymentDetails){
      throw new Error('expected paymentDetails but received none')
    } 
      console.log('success     ')
    const params=   [paymentDetails.usersId,paymentDetails.daysPast,paymentDetails.client_NRC]
    try{
            const sql = `INSERT INTO payment (users_id, days_past,client_nrc) VALUES ($1, $2, $3) RETURNING id`
    const dbRes = await this.db.query(sql,params);
    return dbRes.rows;
    }
catch(err){
  console.log(err)
  }
}
}
export default new ClientModel()