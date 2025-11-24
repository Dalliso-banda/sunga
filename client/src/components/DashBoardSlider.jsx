import { Container, Card, Row, Col } from 'react-bootstrap';

export default function DashBoardSlider({ title, amount }) {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="m-3 w-75">
                <Col
                    xs="auto"
                    className="d-flex gap-3 flex-nowrap overflow-auto w-100"  style={{ scrollBehavior: 'smooth' ,overflowX: 'hidden'}}
                
                >
              
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Active Borrowers</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {amount}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>OverDual Loans</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {amount}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Your Balance</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {amount}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Amount given</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {amount}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}