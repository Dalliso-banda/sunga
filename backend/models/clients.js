import db from '../models/databaseWrapper.js'

class ClientModel {

    constructor() {
        this.db = db
        this.table= 'clients'
    }

  uploadClientData(clientData) {
     if(!clientData){
      throw new Error('expected to get client databut recevied none')
     }

   
    const params =[clientData.client_name,clientData.client_email,clientData.client_number,clientData.client_NRC,clientData.collatral_item,clientData.date_collected,clientData.due_date,clientData.user_id,clientData.interestRate,clientData.total_amount]
    console.log(params.length)
     const sql = `INSERT INTO ${this.table} (client_name,client_email,client_number,client_nrc,collatral_item,date_collected,due_data,users_id,interest,total_amount) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10) RETURNING id`
     const query = this.db.query(sql,params)
  }

}
export default new ClientModel()