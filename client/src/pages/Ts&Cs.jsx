import React from 'react';
import Nav from '../components/Nav.jsx'
import { Container, Row, Col, Card, Alert, ListGroup } from 'react-bootstrap';

export default function SungaTermsAndConditions() {
  return (
    <>
    <Nav/>
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary">Sunga Terms and Conditions of Service</h1>
          <p className="lead text-muted">Effective Date: December 15, 2025</p>
          
          <Alert variant="danger" className="mt-3">
            <strong>⚠️ IMPORTANT LEGAL NOTICE:</strong> These Terms and Conditions constitute a legally binding agreement. By accessing or using the Sunga Service, you agree to be bound by these terms.
          </Alert>
        </Col>
      </Row>

      {/* --- I. Introduction and Acceptance --- */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h2" className="bg-light">I. Introduction and Acceptance</Card.Header>
        <Card.Body>
          <Card.Title>1. Definitions</Card.Title>
          <p>The following terms shall have the meanings set forth below:</p>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item><strong>"Sunga," "We," "Us," or "Our":</strong> Refers to Sunga and the Sunga software platform.</ListGroup.Item>
            <ListGroup.Item><strong>"Service" or "Platform":</strong> Refers to the Sunga web and mobile application, designed for administrative record-keeping and tracking of money lending activities.</ListGroup.Item>
            <ListGroup.Item><strong>"User" or "You":</strong> Refers to the individual or entity (the money lender) accessing or using the Service.</ListGroup.Item>
            <ListGroup.Item><strong>"Borrower Data":</strong> Refers to any personal or financial information about borrowers uploaded or entered by the User.</ListGroup.Item>
          </ListGroup>

          <Card.Title>2. Acceptance</Card.Title>
          <p>By registering for, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these T&Cs, our Privacy Policy, and all other operating rules, policies, and procedures that may be published from time to time.</p>
        </Card.Body>
      </Card>

      {/* --- II. Description of Service (The Sunga Mandate) --- */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h2" className="bg-light">II. Description and Limitations of Service</Card.Header>
        <Card.Body>
          <Card.Title>3. Core Functionality</Card.Title>
          <p>Sunga is a dedicated software platform for **record-keeping and administrative tracking** of the User's independent money lending activities.</p>

          <Card.Title className="text-danger">4. Crucial Limitation: No Lending or Financial Advice</Card.Title>
          <p><strong>Sunga is NOT a lender, a financial institution, or a debt collection agency.</strong> Sunga does not provide financial, legal, tax, or investment advice, nor does it intermediate or guarantee the success or repayment of any loans tracked by the User.</p>
          <p>The User acknowledges and agrees that they are **solely responsible** for all their lending decisions, interest calculations, fee structures, and compliance with all applicable local, regional, and national money lending laws.</p>
        </Card.Body>
      </Card>

      {/* --- IV. Data and Privacy (Focus Area) --- */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h2" className="bg-light">III. User Data, Ownership, and Privacy</Card.Header>
        <Card.Body>
          <Card.Title>5. Ownership of Borrower Data</Card.Title>
          <p>The User retains **full ownership** of all Borrower Data and other information uploaded to the Service.</p>
          
          <Card.Title>6. User Responsibility and Legal Warrants</Card.Title>
          <p>The User warrants that they have:</p>
          <ListGroup>
            <ListGroup.Item>All necessary legal rights and consents (e.g., from borrowers) to collect, process, and transfer the Borrower Data via the Sunga Platform.</ListGroup.Item>
            <ListGroup.Item>Ensured the accuracy, completeness, and legality of all Borrower Data entered.</ListGroup.Item>
          </ListGroup>
          
          <Card.Title className="mt-3">7. Privacy Policy</Card.Title>
          <p>The collection and use of personal data, including User and Borrower Data, is governed by our separate <a href="/privacypolicy">Privacy Policy</a>.</p>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Header as="h2" className="bg-light">IV. Disclaimers and Liability</Card.Header>
        <Card.Body>
          <Card.Title>8. Disclaimer of Warranties</Card.Title>
          <p>The Service is provided on an **"AS IS"** and **"AS AVAILABLE"** basis, without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          
          <Card.Title>9. Limitation of Liability</Card.Title>
          <p>To the fullest extent permitted by applicable law, Sunga shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for lost profits, lost data, or lending losses, arising from your use of or inability to use the Service.</p>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col>
          <p className="text-center mt-5 text-muted">
            For questions regarding these Terms, please contact us at: <a href='mailTo:sungaplatform@gmail.com'>Sunga Email</a>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

