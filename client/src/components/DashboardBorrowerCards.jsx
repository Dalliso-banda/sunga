import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import {Spinner} from 'react-bootstrap';
import axios from 'axios'




function LenderCards() {
  
  const [debtors,setDebtors]= useState([])
  const [isLoading,setisLoading]=useState(true)
useEffect(()=>{

const fetchClients=  ()=>{
  try{
        axios.get('/api/client/getclients').then(
          res=>{
    const debtorsArray=res.data.filter((debtor)=>{debtor?})

      setDebtors(debtorsArray)

          }
        )
  }
  catch(err){
    console.log(err)
  }
  finally{
    setisLoading(false)
  }
}
  fetchClients();
   
},[])

console.log(debtors)


  return (
    <Container className="py-4">
  { !isLoading?   <Row className="g-4">
     
          <Col md={4} sm={6} xs={12} >
     {debtors.map((debtor)=>
  

            <Card className={`lender-card` }  key={debtor.id}>
              <Card.Body>
                <Card.Title className="lender-header">{debtor.client_name}</Card.Title>
                <div className="lender-info">
                 <b> AMOUNT</b>: k {debtor.total_amount}
                  <br></br>
            
               <b>   Date collected</b>: {debtor.date_collected}
                          <br></br>
               <b>   dual date</b>: {debtor.due_data.slice(0,10)}
                          <br></br>
                  <b>collatral</b>: {debtor.collatral_item}
                          <br></br>
                    <b>   Interest</b>: K{debtor.interest}

                </div>
                {debtor.id}
                <div className="action-buttons mt-3">
                  <Button variant='success' >Clear</Button>
                  <Button className="m-4">History</Button>
                </div>
              </Card.Body>
            </Card>

     )

  }
          </Col>
  
      </Row>:<Spinner></Spinner>}
    </Container>
  );
}

export default LenderCards;
