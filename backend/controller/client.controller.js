import clientModule from '../models/clients.js'
class ClientController {
    async UploadClient(req,res){
   clientModule.uploadClientData(req.body)
   
    }
}

export default new ClientController();