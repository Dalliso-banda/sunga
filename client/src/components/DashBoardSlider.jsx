import { Container, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DashBoardSlider() {
const [clientData,setClientData] = useState([])
const [overdueLoans,setOverdualLoans]= useState(null)


useEffect(()=>{
   
    const fetchClients=()=>{
    axios.get('/api/client/getclients').then(res=>setClientData(res.data)).catch(err=>console.log(err))
    }
    fetchClients();

},[])
 
const calculateOverdueLoans = () => {
    const now = new Date();
    let count = 0;
    
    clientData.forEach(client => {
        const dueDate = new Date(client.due_data);
        if (dueDate < now) {
            count++;
        }
    });
    return count;
}
const calculatePendingBorrowers = () => {
       let count =0;
    clientData.forEach(client => {
        if(client.status==0){
            count ++
        }
    });
    return count;
}
const calculateGrossIncome = () => {
    let totalIncome = 0;
    clientData.forEach(client => {

        totalIncome += parseFloat(client.total_amount )|| 0;
    });
    return totalIncome;
}
const calculateProfit=()=>{
    let totalProfit =0;
    clientData.forEach(client=>{
        totalProfit += (parseFloat(client.interest)  )||0;
    })
    return totalProfit;
}

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="m-3 w-75">
                <Col
                    xs="auto"
                    className="d-flex gap-3 flex-nowrap overflow-auto w-100"  style={{ scrollBehavior: 'smooth' ,overflowX: 'hidden'}}
                
                >
              
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Pending debtors</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {calculatePendingBorrowers()}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>OverDual Loans</Card.Text>
                            <Card.Title style={{ fontSize: '1.6rem', fontWeight: 'bold' , color:'red'}}>
                         {calculateOverdueLoans()} 
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Expected income</Card.Text>
                            <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' ,color:'green'}}>
                                 k{calculateGrossIncome().toFixed(2)}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                      <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text>Total borrowers </Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' ,color:'green'}}>
                                      {clientData.length}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                       <Card className="p-3 shadow-sm flex-shrink-0" style={{ width: '12rem', height: '8rem' }}>
                        <Card.Body>
                            <Card.Text> Profit</Card.Text>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' ,color:'green'}}>
                                   {calculateProfit().toFixed(2)}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}