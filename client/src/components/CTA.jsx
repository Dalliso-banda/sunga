import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Import the core hook from the library
import { useInView } from 'react-intersection-observer'; 
import {Image } from 'react-bootstrap';
import '../../src/App.css'; 

export default function MiddleSectionAnimated() {
  const { ref, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: true, 
  });

  const animationClass = inView ? 'is-visible' : '';

  return (
    <Container 
      ref={ref} 
      className={` d-flex flex-column py-5 animate-on-scroll ${animationClass}`}
    >
     <Image src='../../public/cta1.png' className=" align-self-end w-75"></Image>
     <br></br>
      <Row className="text-center mb-5 ">
        <Col className='align-self-end'>
          <h2>Powerfully Simple Tracking</h2>
          <p className="lead text-muted">Sunga provides real-time visibility into all borrower activity.</p>
        </Col>
      </Row>
      <Row>
        {/* Example Feature Card using React-Bootstrap */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-lg border-0">
            <Card.Body className="text-center">
              <i className="bi bi-clock-history icon-lg mb-3"></i>
              <Card.Title>Automated Reminders</Card.Title>
              <Card.Text>Set up payment reminders that send automatically via  email.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-lg border-0">
            <Card.Body className="text-center">
              <i className="bi bi-clock-history icon-lg mb-3"></i>
              <Card.Title>Real-Time Financial Dashboard</Card.Title>
              <Card.Text>Users get an instant, clear overview of their entire loan portfolio health, showing total outstanding balances, payments due, and overall profitability at a glance.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-lg border-0">
            <Card.Body className="text-center">
              <i className="bi bi-clock-history icon-lg mb-3"></i>
              <Card.Title>Eliminate Calculation Errors</Card.Title>
              <Card.Text>Sunga automates all interest, late fee, and balance calculations, ensuring 100% accuracy and avoiding costly mistakes or borrower disputes</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* ... other feature cards */}
      </Row>
         <Image src='../../public/cta2.jpg' className='w-50 shadow-lg align-self-start'
  ></Image>
    </Container>
  );
}

