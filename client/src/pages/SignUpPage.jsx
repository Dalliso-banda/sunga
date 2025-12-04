import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import axios from 'axios'

import FormPageDesign  from '../styles/FormPage.jsx'


const styles = FormPageDesign();  

const isValidEmail = (value) => { 
    const emailRegex = /^\S+@\S+\.\S+$/;   
   

 if(!value)
  return true
    if (emailRegex.test(value) ) {

        return true;

    }

    return "Please enter a valid email address";
};
const isValidNumber=(value)=>{
    
 const phoneRegex = /^\+?[\d\s-]{8,20}$/; 

    if (phoneRegex.test(value) ) {

        return true;

    }

    return "Please enter a valid  phone number.";

}




export default function Login() {
  
  useEffect(() => {
     document.title = "Login - Sunga";
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log('Identifier and Password:', data);

  if(data.termsAccepted)
    data.termsAccepted=1;
    axios.post('/api/auth/signup', {
        businessname: data.businessName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
        location: data.location,
        termsAccepted:data.termsAccepted
    })
    .then(response => {
        console.log('Signup successful:', response.data);
      //  navigate('/login'); 
    })
    .catch(error => {
        console.error('There was an error signing up!', error);
    });

    
  
  };  

  return (
    <div style={styles.pageBackground}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}> 
            <Card className="shadow-lg">
              <Card.Header className="text-center">
                <h2 style={styles.logoText}>SUNGA</h2>
                <p className="text-muted mb-0">Lender signup</p>
              </Card.Header>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Body> 
                
                 
                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter phone number" 
                      {...register("phoneNumber", { 
                        required: "Phone Number is required.",
                       
                        validate: isValidNumber 
                      })} 
                      isInvalid={!!errors.phoneNumber}
                    />
                    
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                     <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter email address" 
                      {...register("email", { 
                       
                       
                        validate: isValidEmail 
                      })} 
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                
                 
                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>  Business Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter business name" 
                      {...register("businessName", { 
                        required: "Business Name is required.",
                 
                      })} 
                      isInvalid={!!errors.businessName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.businessName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                    
                 
                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Location" 
                      {...register("location", { 
                        required: "Location is required.",
                       
                      })} 
                      isInvalid={!!errors.location}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.location?.message}
                    </Form.Control.Feedback>



                  </Form.Group>




       <Form.Group controlId="formBasicCheckbox">
  <Form.Check
    type="checkbox"
    label="Agree to terms"
    {...register('termsAccepted', {
      required: 'You must agree to the terms and conditions.',
    })}
    isInvalid={!!errors.termsAccepted}
  />
  <Form.Control.Feedback type="invalid">
    {errors.termsAccepted?.message}
  </Form.Control.Feedback>
</Form.Group>
                  
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label> Create Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      {...register("password", { 
                        required: "Password is required.",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters."
                        }
                      })} 
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                
                  <Button 
                    className="w-100" 
                    type="submit" 
                    style={styles.primaryButton}
                  >
                    Log In
                  </Button>
                  
                </Card.Body>
              </Form>
              
              <Card.Footer className="text-center text-muted">
                <a href="/forgot-password" style={{ textDecoration: 'none', color: styles.logoText.color }}>
                    Forgot Password?
                </a>
              </Card.Footer>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
