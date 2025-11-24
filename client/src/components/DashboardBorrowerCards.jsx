import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';





function LenderCards() {
  const lenders = [
    { name: "Bank A", info: ["Loan: $5000", "Due: Jan 2026"], overdue: false,interest:'100',collatera:'iphone'  },
    { name: "Bank B", info: ["Loan: $2000", "Due: Oct 2025"], overdue: true ,interest:'100',collatera:'iphone' },
    { name: "Bank C", info: ["Loan: $7500", "Due: Dec 2025"], overdue: false,interest:'100',collatera:'iphone' },
  ];

  return (
    <Container className="py-4">
      <Row className="g-4">
        {lenders.map((lender, idx) => (
          <Col md={4} sm={6} xs={12} key={idx}>
            <Card className={`lender-card ${lender.overdue ? "overdual" : ""}`}>
              <Card.Body>
                <Card.Title className="lender-header">{lender.name}</Card.Title>
                <div className="lender-info">
                  {lender.info.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
                <div className="action-buttons mt-3">
                  <Button variant='success' >Clear</Button>
                  <Button className="m-4">History</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LenderCards;
