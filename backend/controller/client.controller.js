import clientModule from '../models/clients.js'
import jwtMaster from '../auth/jwtSigner.js';

class ClientController {
    async UploadClient(req,res){  
        const uploadedClientData = req.body
        uploadedClientData.status='0'
        try{
  await clientModule.uploadClientData(uploadedClientData)
      res.status(200).json({message:'client data uploaded successfully'})

        }catch(err){
          res.status(500).json({message:'Internal server error'})
        }
    }
    async getClient(req,res){
        try{
            const auth_token= req.cookies['auth_token'];
            const decoded = jwtMaster.masterVerify(auth_token);
              if(!auth_token){
    return res.status(401).json( {message:'unauthenticated'})

  }
      const clientData =  await clientModule.getClientData(decoded.id);

      console.log(
        clientData
      )
     
   res.status(200).json(clientData)
            
}catch(err){console.log(err)}

    }
}

export default new ClientController();