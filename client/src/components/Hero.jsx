import {Container } from 'react-bootstrap';
export default function Hero() {
    const background={
        backgroundImage: 'url(/src/assets/heroBrand.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  return (
    <Container className="bg-light p-5 rounded-lg m-3" styele={background}>
      <h1>Welcome to Sunga</h1>
      <p>Your trusted platform for seamless borrowing and lending.</p>
    </Container>
  );
}