import { useEffect } from 'react';
import ProfileHolder from '../components/ClientHistoryProfileHolder.jsx';
import Nav from '../components/Nav.jsx';
import  ClientHistoryChartAnalysis  from '../components/ClientHistoryChartAnalysis.jsx';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function ClientHistory() {
    useEffect(() => {   
        document.title = 'Client History - Sunga';
    }, []);
  return (
    <>
  
    <Nav/>
    <div className='w-100 d-flex flex-column align-items-center p-2'>
<ProfileHolder status='cleared' email='chrishacia@example.com' name='chrishacia' number='12345' title='frendos mentor'/>
</div>
 <h1 className='m-3'>loan History</h1>
 <div className='w-90 m-3 d-flex align-items-center  justify-content-center '>
<Container className='m-3 '>

<Row  className='w-100 d-flex  g-4 align-items-center  justify-content-center  ' >
   <Col  xs={12}  sm={5}>
           <ClientHistoryChartAnalysis/>
    
   </Col>

   <Col  className='' xs={12}  sm={5}>
        <Card>
          <Card.Header>
            credit history
          </Card.Header>
      <ol>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore animi accusantium sapiente praesentium, accusamus, enim iusto dolores, tempore eligendi culpa nemo aliquid expedita ratione ipsum possimus voluptatibus rem laboriosam.
        </li>
              <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore animi accusantium sapiente praesentium, accusamus, enim iusto dolores, tempore eligendi culpa nemo aliquid expedita ratione ipsum possimus voluptatibus rem laboriosam.
        </li>
              <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore animi accusantium sapiente praesentium, accusamus, enim iusto dolores, tempore eligendi culpa nemo aliquid expedita ratione ipsum possimus voluptatibus rem laboriosam.
        </li>
              <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore animi accusantium sapiente praesentium, accusamus, enim iusto dolores, tempore eligendi culpa nemo aliquid expedita ratione ipsum possimus voluptatibus rem laboriosam.
        </li>
      </ol>
        </Card>
    
   </Col>
</Row>

    </Container>
    </div>
 
    </>
   
  );
}
