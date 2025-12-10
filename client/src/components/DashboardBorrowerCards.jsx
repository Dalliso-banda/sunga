import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import {Spinner} from 'react-bootstrap';
import axios from 'axios'




function LenderCards() {
  const [clients,setClients]=useState([]);
  const [isLoading,setisLoading]=useState(true)
useEffect(()=>{

const fetchClients=  ()=>{
  try{
        axios.get('/api/client/getclients').then(
          res=>{
      setClients(res.data)
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
console.log(clients[0])

  return (
    <Container className="py-4">
  { !isLoading?   <Row className="g-4">
     
          <Col md={4} sm={6} xs={12} >
     {clients.map((client)=>
            <Card className={`lender-card` }  key={client.id}>
              <Card.Body>
                <Card.Title className="lender-header">{client.client_name}</Card.Title>
                <div className="lender-info">
                 <b> AMOUNT</b>: k {client.total_amount}
                  <br></br>
            
               <b>   Date collected</b>: {client.date_collected}
                          <br></br>
               <b>   dual date</b>: {client.due_data}
                          <br></br>
                  <b>collatral</b>: {client.collatral_item}
                          <br></br>
                    <b>   Interest</b>: K{client.interest}

                </div>
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
