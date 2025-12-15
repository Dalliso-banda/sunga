import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useUser } from "../contexts/UserAuthContext.jsx";

import FormPageDesign from "../styles/FormPage.jsx";

const styles = FormPageDesign();



const isValidEmail = (value) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (emailRegex.test(value)) {
    return true;
  }
  return "Please enter a valid email address.";
};

export default function UploadClient() {
  const {userData}=useUser()
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "UPLOAD CLIENT - Sunga";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = data => {

    const getDueDate=(startDate,periodInWeeks)=>{

      const start= new Date(startDate);
      const days = periodInWeeks * 7;
      start.setDate(start.getDate() + days);
      return start.toISOString().split('T')[0]; 

    }
   const getInterest=(rateInPercent,principal,periodInWeeks)=>{
   const rate = rateInPercent/100;
    const time=periodInWeeks/52;
      const interest = (principal * rate * time);
      return interest.toPrecision(4);
   }
const getTotalAmount=(principal,interest)=>{
  const amount=parseFloat(principal)+parseFloat(interest)
  return amount.toFixed(2);
}
//pardon me here interestRate corresponds to just interest
    const uploadData={
      client_name:data.clientName,
      client_email: data.clientEmail,
      client_NRC: data.clientNRC.replaceAll('/','-'),
      client_number:data.clientNumber,
      due_date: getDueDate(data.dateCollected,data.periodInWeeks),
      interestRate:getInterest(data.interestRate,data.amountCollected,data.periodInWeeks),
      date_collected:data.dateCollected,
      user_id:userData.id,
      total_amount:getTotalAmount(data.amountCollected,getInterest(data.interestRate,data.amountCollected,data.periodInWeeks)),
      collatral_item:data.collatralItem

    }

   axios.post('/api/client/uploadclient',uploadData)
  .then(response => {
    console.table(response.data);
  //navigate('/dashboard')
  })
  .catch(error => {
   if(error.response.status===401){
  console.log(error)
   }
  });

   
  };
 

  return (
    <div style={styles.pageBackground}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={6}>
            <Card className="shadow-lg">
              <Card.Header className="text-center">
                <h2 style={styles.logoText}>SUNGA</h2>
                <p className="text-muted mb-0"> Upload Borrower</p>
              </Card.Header>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>client Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter client email or phone number"
                      {...register("clientEmail", {
                        required: "Email is required.",

                        validate: isValidEmail,
                      })}
                      isInvalid={!!errors.clientEmail}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.clientEmail?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>client Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter client email or phone number"
                      {...register("clientNumber", {
                        required: "Phone Number is required.",
                    maxLength:{
                          value: 10,
                          message: 'input valid phone number'

                        },
                        minLength:{
                          value: 10,
                          message: 'input valid phone number'
                          
                        }

                      
                      })}
                      isInvalid={!!errors.clientNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.clientNumber?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>client NRC</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter client NRC"
                      {...register("clientNRC", {
                        required: "NRC is required.",
                        minLength:{
                          value: 8,
                          message: 'input valid NRC'

                        }
                        
                      })}
                      isInvalid={!!errors.clientNRC}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.clientNRC?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label> Client Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Client Name"
                      {...register("clientName", {
                        required: "Client Name is required.",
                      })}
                      isInvalid={!!errors.clientName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.clientName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label> Collatral Item</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Collatral Item"
                      {...register("collatralItem", {
                        required: "Collatral Item is required.",
                      })}
                      isInvalid={!!errors.collatralItem}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.collatralItem?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Date collected</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="enter date"
                      {...register("dateCollected", {
                        required: "Date collected is required.",
                      })}
                      isInvalid={!!errors.dateCollected}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.dateCollected?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>interest rate</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="enter interest rate in percent e.g 10 for 10%"
                      {...register("interestRate", {
                        required: "Interest rate is required.",
                      })}
                      isInvalid={!!errors.interestRate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.interestRate?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
     
                  <Form.Group className="mb-4">
                    <Form.Label>Amount collected</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="enter amount collected eg 5000 for five thousandkwacha "
                      {...register("amountCollected", {
                        required: "Amount collected is required.",
                      })}
                      isInvalid={!!errors.amountCollected}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.amountCollected?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>period in weeks</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="enter period in weeks"
                      {...register("periodInWeeks", {
                        required: "Period in weeks is required.",
                      })}
                      isInvalid={!!errors.periodInWeeks}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.periodInWeeks?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button className="w-100 " style={styles.primaryButton} type="submit">
                   Upload Client
                  </Button>
                </Card.Body>
              </Form>
          
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
