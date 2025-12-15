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

   console.log('clear loan called',req.body)

      const paymentDetails= req.body;
 console.log(paymentDetails,'from control')



try {
    const dbRes = await clientModule.clearDebt(paymentDetails.clientId);
    // If clearDebt succeeds, proceed to trackPayment
    await clientModule.trackPayment(paymentDetails);
    console.log("Debt cleared and payment tracked successfully.");

} catch (error) {
    console.error("An error occurred during payment processing:", error);
    return res.status(500).json({message:'Error processing payment'});
}

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
    async getClientHistoryByNrc(req,res){

    try{
      const {nrc}= req.params;
      console.log(nrc,'here');

      if(!nrc){
        return res.status(400).json({message:'nrc not provided'})
      }

      const dbRes = await clientModule.getClientHistoryByNrc(nrc);
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