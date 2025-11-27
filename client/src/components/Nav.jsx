
import React from 'react';
import { 
    Navbar, 
    Nav, 
    Container, 
    Button, 
} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';



export default function NavBar() {
   
 const path =window.location.pathname.slice(1)
    return (
     
        <Navbar bg="primary" variant="dark"  expand="lg" className="w-100 p-2 border-bottom">
            <Container fluid>
            
                <Navbar.Brand href="/">Sunga</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" {    ...path === '/'||!path ? { active: true } : {}  }>
                            Home
                        </Nav.Link>
                        
                        <Nav.Link href="/dashboard" { ...path=== 'dashboard' ? { active: true } : {}}>
                            Dashboard

                        </Nav.Link>
                        
                        <Nav.Link href="/FAQs" {...path === 'FAQs' ? { active: true } : {}}>
                            FAQs
                        </Nav.Link>
                    </Nav>

                    <Nav>

                        <Button variant="outline-light">       
                      
                     <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                     Login
                     </Link>
                    
                        </Button>
                    </Nav>
                    
                    {/* If you wanted the commented-out dropdown:
                    <Nav>
                        <NavDropdown title="Account" id="account-dropdown" align="end">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                      
      <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}