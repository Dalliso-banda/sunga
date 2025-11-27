import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

export default function SungaFooter() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          {/* Column 1 - Logo & Quick Info */}
          <Col md={4} sm={12} className="mb-4">
            <h4>Sunga</h4>
            <p>Simplified Lending. Secure Tracking.</p>
            <div>
              <a href="#" style={{ marginRight: '10px', color: '#fff' }}>LinkedIn</a>
              <a href="#" style={{ marginRight: '10px', color: '#fff' }}>X</a>
              <a href="#" style={{ color: '#fff' }}>Facebook</a>
            </div>
            <p className="mt-3">© {new Date().getFullYear()} Sunga. All Rights Reserved.</p>
          </Col>

          {/* Column 2 - Navigation Links */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Product & Features</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: '#fff' }}>How It Works</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Pricing</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Features</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Testimonials</Nav.Link>
            </Nav>

            <h5 className="mt-3">Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: '#fff' }}>About Us</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Contact Us</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Blog/Resources</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Careers</Nav.Link>
            </Nav>
          </Col>

          {/* Column 3 - Support & Legal */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Support</h5>
            <Nav className="flex-column">
              <Nav.Link href="/FAQs" style={{ color: '#fff' }}>FAQs</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Knowledge Base</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Support Chat</Nav.Link>
            </Nav>

            <h5 className="mt-3">Legal</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: '#fff' }}>Terms of Service</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Privacy Policy</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Cookie Policy</Nav.Link>
              <Nav.Link href="#" style={{ color: '#fff' }}>Disclaimer</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#111', padding: '10px 0', marginTop: '20px' }}>
        <Container className="d-flex justify-content-between">
          <div>
            <span style={{ marginRight: '15px' }}>🔒 Even sunga doesnt open it </span>
            <span>🔑 Data Is secured</span>
          </div>
       
        </Container>
      </div>
    </footer>
  );
}


