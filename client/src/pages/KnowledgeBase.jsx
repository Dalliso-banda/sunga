import React from 'react';
import { Container, Row, Col, Card, Table, Accordion, Badge, ListGroup } from 'react-bootstrap';
import Nav  from '../components/Nav.jsx'

const researchData = [
  {
    feature: "Data Retrieval & Accessibility",
    digital: "Instant global access via search, filters, and cloud storage.",
    paper: "Slow, physical searching through cabinets; access limited to one location.",
    impact: "Saves hours per week on record-keeping, essential for tracking borrowers and payment history."
  },
  {
    feature: "Security & Backup",
    digital: "Encrypted, password-protected, with automated off-site backups (cloud).",
    paper: "Vulnerable to fire, flood, theft, and unauthorized physical access.",
    impact: "Mitigates total data loss risk, ensuring continuous operation and compliance."
  },
  {
    feature: "Audit & Reporting",
    digital: "Automatic calculations, instant report generation, and clear digital audit trails.",
    paper: "Manual calculation, prone to human error, time-consuming to compile reports.",
    impact: "Ensures accuracy for financial and legal purposes, reducing calculation errors."
  },
  {
    feature: "Scalability & Storage",
    digital: "Virtually infinite digital storage with no physical space cost.",
    paper: "Requires ever-increasing physical storage space (filing cabinets, rooms).",
    impact: "Allows the business to grow without increasing office space or overhead costs."
  }
];


export default function DigitalVsPaper(){
  return (
    <>
    <Nav/>
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 text-primary">
            **Sunga:** Digital Record Tracking vs. Paper
          </h1>
          <p className="lead">
            Research-backed reasons to move your money lending records online.
          </p>
          
        </Col>
      </Row>
      <hr />

 
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm h-100 border-success">
            <Card.Body>
              <Card.Title className="text-success">✅ Digital Tracking Benefits</Card.Title>
              <Card.Text>
                Online tools, like **Sunga**, automate crucial parts of the lending process, saving time, boosting data security, and ensuring **legally sound, instantly verifiable** records.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>99.9%</strong> Uptime & Availability</ListGroup.Item>
                <ListGroup.Item><strong>Zero</strong> Physical Storage Cost</ListGroup.Item>
                <ListGroup.Item><strong>Built-in</strong> Audit Trail</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100 border-danger">
            <Card.Body>
              <Card.Title className="text-danger">❌ Paper System Risks</Card.Title>
              <Card.Text>
                Reliance on paper exposes the business to risks from **data loss, administrative overhead**, and difficulty in scaling operations as the borrower base grows.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>High Risk of **Physical Loss** (Fire/Flood)</ListGroup.Item>
                <ListGroup.Item>Difficult & Slow **Information Retrieval**</ListGroup.Item>
                <ListGroup.Item>Increased Risk of **Manual Calculation Errors**</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* --- Section 2: Detailed Feature Comparison (Table) --- */}
      <h2 className="mb-3 text-center">📊 Feature Comparison: Paper vs. Online</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Key Factor</th>
            <th>Digital Tracking (Sunga)</th>
            <th>Paper Records</th>
            <th>Business Impact</th>
          </tr>
        </thead>
        <tbody>
          {researchData.map((item, index) => (
            <tr key={index}>
              <td>
                <Badge bg="info" className="me-2">{index + 1}</Badge>
                **{item.feature}**
              </td>
              <td className="text-success">{item.digital}</td>
              <td className="text-danger">{item.paper}</td>
              <td>*<small>{item.impact}</small>*</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />

      {/* --- Section 3: Deep Dive into Advantages (Accordion) --- */}
      <h2 className="mb-3 text-center">💡 Deep Dive: Why Online Is Superior</h2>
      <Accordion defaultActiveKey="0" className="shadow">
        <Accordion.Item eventKey="0">
          <Accordion.Header>**Precision and Consistency**</Accordion.Header>
          <Accordion.Body>
            Digital tools use standardized forms and automatic validation, eliminating the **illegibility and inconsistency** often found in handwritten notes. This is crucial for legal disputes and maintaining clear loan histories.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>**Tracking and Accountability**</Accordion.Header>
          <Accordion.Body>
            Every entry, modification, and access event in a digital system is **time-stamped and logged** (an audit trail). This makes it easy to track down when a record was last updated and by whom—a feature impossible with paper, which is vital for monitoring and tracking borrowers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>**Cost and Time Efficiency**</Accordion.Header>
          <Accordion.Body>
            While there is an initial setup cost, the long-term savings from eliminating paper, printer ink, filing cabinets, and the **labor cost** of manual searching/data entry quickly make the digital solution more profitable.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="text-center mt-5">
        <p className="fw-bold">
          Ready to stop managing paper and start concentrating on lending?
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Try Sunga Today
        </button>
      </div>

    </Container>
    </>
  );
};

