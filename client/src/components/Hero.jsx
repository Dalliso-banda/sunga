import {Container } from 'react-bootstrap';
import {Link } from 'react-router-dom'

export default function Hero() {
    const background={
        backgroundImage: 'url(../../public/heroBrand.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        width: '9000px',
        color: 'white',
      
  
    }
  return (
    <div className='d-flex w-100 bg-primary  align-items-center justify-content-center' >
    <Container className="bg-light p-5  bgrounded-lg m-0 p-5" style={background}>
      <h1>Welcome to Sunga</h1>
      <p>Your trusted platform for seamless running lending business.</p>
      <button className="btn btn-primary btn-lg">
        <Link className='text-white nav-link' to={'/signup'}>Get Started</Link>
      </button>
    </Container>
    </div>
  );
}