
import React from 'react';
import { 
    Navbar, 
    Nav, 
    Container, 
    Button, 
} from 'react-bootstrap'; 

 

export default function NavBar() {
   

    return (
     
        <Navbar bg="primary" variant="dark" expand="lg" className="w-100 p-2">
            <Container fluid>
            
                <Navbar.Brand href="/">Sunga</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active>
                            Home
                        </Nav.Link>
                        
                        <Nav.Link href="/dashbored">
                            Dashboard
                        </Nav.Link>
                        
                        <Nav.Link href="/FAQs">
                            FAQs
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Button variant="outline-light">Login</Button>
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