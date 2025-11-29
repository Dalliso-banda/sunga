import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import Nav from '../components/Nav.jsx'

export default function AboutUs (){
  return (
       <>
       <Nav/>
    <Container className="my-5">
      
      {/* --- Section 1: Hero & Mission Statement (Modern Jumbotron Equivalent) --- */}
      {/* We use a Card with padding (p-5) and specific styling to create the Hero/Jumbotron look. */}
      <Card className="text-center bg-light p-5 mb-5 shadow-sm border-primary">
        <Card.Body>
          <h1 className="display-4 text-primary">
            **Our Mission: Clarity in Lending** 📊
          </h1>
          <p className="lead mt-3">
            **Sunga** exists to free money lenders from the burden of manual record-keeping, allowing them to concentrate on what matters most: **growing their business and serving their borrowers.**
          </p>
          <hr className="my-4" />
          <p>
            We transform messy paper ledgers into secure, searchable, and instantly accessible digital records.
          </p>
        </Card.Body>
      </Card>
      
      ---
      
      {/* --- Section 2: The Problem We Solve --- */}
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="text-center mb-4">The Problem: Why Paper Fails Lenders</h2>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <Card className="h-100 text-center border-danger">
            <Card.Body>
              <Card.Title className="text-danger">⚠️ High Risk of Loss</Card.Title>
              <Card.Text>
                Paper records are vulnerable to fire, water, theft, and physical degradation, leading to **total loss of loan history**.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <Card className="h-100 text-center border-danger">
            <Card.Body>
              <Card.Title className="text-danger">⏳ Administrative Drag</Card.Title>
              <Card.Text>
                Time spent searching through files, calculating balances, and manually generating statements is **time not spent growing the loan book**.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center border-danger">
            <Card.Body>
              <Card.Title className="text-danger">❓ Borrower Confusion</Card.Title>
              <Card.Text>
                Inconsistent or illegible paper records can lead to disputes with borrowers, making debt recovery and **borrower tracking** more difficult.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      ---

      {/* --- Section 3: The Sunga Solution (Focus on Value) --- */}
      <Row className="mt-5 mb-5 align-items-center">
        <Col md={6}>
          <h2 className="text-primary">✨ The Sunga Solution</h2>
          <p className="lead">
            We simplify complex processes so you can focus on building relationships.
          </p>
          <ListGroup className="shadow-sm">
            <ListGroup.Item action variant="success">
              **Digital Audit Trail:** Every transaction is time-stamped, providing undeniable proof for every record.
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              **Instant Retrieval:** Find any borrower's full history in seconds, not hours.
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              **Secure Cloud Backup:** Data is encrypted and backed up off-site, protecting against physical disasters.
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
           
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-3">🤝 Our Story: Built for Lenders</h2>
          <Card className="p-4 shadow">
            <Card.Text>
              "The idea for **Sunga** began on **[2025-11-10]** with a simple recognition: money lenders need a tool that works as hard as they do. I saw first-hand how much time was wasted on managing paper records and realized that a secure, intuitive digital platform could be game-changing."
            </Card.Text>
            <Card.Text className="fw-bold mt-3">
          Ideas dont rain from heaven they come through critical analytics of your surrounding
             </Card.Text>
            <footer className="blockquote-footer mt-2">
               Dalitso The Founder, Sunga
            </footer>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <Button variant="primary" size="lg">
     <a  className='nav-link'href='/knowledgebase'>         See How Sunga Can Help Your Business</a>
        </Button>
      </div>

    </Container>
    </>
  );
};

