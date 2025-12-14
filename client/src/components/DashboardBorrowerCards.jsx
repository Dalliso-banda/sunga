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
    const debtorsArray=res.data.filter((debtor)=>debtor.has_paid==false)

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

debtors.forEach((entry)=>{
   console.log(entry.paid)
})


const clearDebt= async(clientId)=>{
  try{
    axios.post('/api/client/cleardebt',{clientId:clientId}).then(
      res=>{
        const updatedDebtors= debtors.filter((debtor)=>debtor.id!==clientId)
        setDebtors(updatedDebtors)
      }
    )
  }catch(err){
    console.log(err)
  }
}

return (
  <Container className="py-4">
    <h2 className="mb-4">Debtors</h2>
    <Row>
      {debtors.map((debtor) => (
        <Col md={4} sm={6} xs={12} key={debtor.id}>
          <Card className={`lender-card`}>
            <Card.Body>
              <Card.Title className="lender-header">{debtor.client_name}</Card.Title>
              <div className="lender-info">
                <b>AMOUNT</b>: k {debtor.total_amount}
                <br></br>
                <b>Date collected</b>: {debtor.date_collected}
                <br></br>
                <b>Due date</b>: {debtor.due_data.slice(0,10)}
                <br></br>
                <b>Collateral</b>: {debtor.collatral_item}
                <br></br>
                <b>Interest</b>: K{debtor.interest}
              </div>
              <div className="action-buttons d-flex justify-content-end">
                <Button variant='success' className='m-3' onClick={() =>clearDebt(debtor.id)}>Clear</Button>
                <Button className="m-3">History</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)
}

export default LenderCards;
