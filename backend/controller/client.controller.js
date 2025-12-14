import clientModule from '../models/clients.js'
import jwtMaster from '../auth/jwtSigner.js';

class ClientController {


    async UploadClient(req,res){  
        const uploadedClientData = req.body
        uploadedClientData.has_paid=false;
        try{
  await clientModule.uploadClientData(uploadedClientData)
      res.status(200).json({message:'client data uploaded successfully'})

        }catch(err){
          res.status(500).json({message:'Internal server error'})
        }
    }


    async getClients(req,res){
        try{
            const auth_token= req.cookies['auth_token'];
            const decoded = jwtMaster.masterVerify(auth_token);
              if(!auth_token){
    return res.status(401).json( {message:'unauthenticated'})

  }
      const clientData =  await clientModule.getClientsByUserId(decoded.id);

      console.log(
        clientData
      )
     
   res.status(200).json(clientData)
            
}catch(err){console.log(err)}

    }

  async clearLoan(req,res){
    try{
      const {clientId}= req.body;
      if(!clientId){
        return res.status(400).json({message:'clientId not provided'})
      }
      const dbRes = await clientModule.clearDebt(clientId);
      res.status(200).json({message:'debt cleared successfully'})
    }catch(err){
      res.status(500).json({message:'Internal server error'})
    }
  }

  async getClientById(req,res){

    try{
      const {id}= req.params;
      console.log(id);

      if(!id){
        return res.status(400).json({message:'id not provided'})
      }

      const dbRes = await clientModule.getClientDataById(id);
       if(!dbRes){
        return res.status(404).json({message:'client not found'})
       }
      res.status(200).json(dbRes)
    }catch(err){
      console.log(err)
      res.status(500).json({message:'Internal server error'})
    }
  }
}

export default new ClientController();