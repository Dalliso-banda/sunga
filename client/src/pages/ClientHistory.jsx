import { useEffect, useState } from 'react';
import ProfileHolder from '../components/ClientHistoryProfileHolder.jsx';
import Nav from '../components/Nav.jsx';
import  ClientHistoryChartAnalysis  from '../components/ClientHistoryChartAnalysis.jsx';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ClientHistory() {

  
  const [client,setDebtor]=useState({})
  const [clientHistory,setClientHistory]= useState([])

  const{id}=useParams();

    useEffect(() => {   
        document.title = 'Client History - Sunga';
    }, []);

   useEffect(() => {

    const fetchDebtor=()=>{
     try{
      axios.get(`/api/client/getclientbyid/${id}`).then(
        res=>{
          console.log(res.data[0])
          setDebtor(res.data[0])
        }
      )
     }catch(err){
      console.log(err)
     }  
  }
  fetchDebtor();
   },[])

   useEffect(() => {
      
    const fetchHistory=(nrc)=>{
if(nrc){
       try{
        console.log(nrc)
      axios.get(`/api/client/paymenthistory/${nrc.toString()}`).then(
        res=>{
          console.log(res.data[0])
          setClientHistory(res.data)
        }
      )
     }catch(err){
      console.log(err)
     }  
}
  }
  fetchHistory(client.client_nrc);
   
   },[client])


   

const calculateBadDebtors= (history)=>{
    let count =0;
   history.forEach(entry=>{
        if(entry.days_past>0){
            count++
        }
    })
    return count;
}

const calculateGoodDebtors= (history)=>{
  console.log(history)
    let count =0;
   history.forEach(entry=>{
        if(entry.days_past==0){
            count++
        }
    })
    return count;
}
let goodDebts = calculateGoodDebtors(clientHistory)
let badDebts = calculateBadDebtors(clientHistory)
const score =goodDebts/clientHistory.length * 100;
  return (
    <>
  
    <Nav/>
    <div className='w-100 d-flex flex-column align-items-center p-2'>
<ProfileHolder has_paid={client.has_paid } email='test' name={client.client_name} number={client.client_number}/>
</div>
 <h1 className='m-3'>loan History</h1>
 <div className='w-90 m-3 d-flex align-items-center  justify-content-center '>
<Container className='m-3 '>

<Row  className='w-100 d-flex  g-4 align-items-center  justify-content-center  ' >
   <Col  xs={12}  sm={5}>
           <ClientHistoryChartAnalysis data={[goodDebts ,badDebts]}/>
    
   </Col>

   <Col  className='' xs={12}  sm={5}>
        <Card>
          <Card.Header>
            credit history
          </Card.Header>
          <ul>
         { clientHistory.map((payment)=>(

        <li key={payment.id} className='nav-link m-2 '>
            Paid <i><strong>K{payment.amount_paid}</strong></i> on {payment.date_paid.slice(0,10).replaceAll('-','/')}
        </li>
         ))

         }
          </ul>

        </Card>
    
   </Col>

   <Col  className='' xs={12}  sm={5}>
   
    <Card>
      <Card.Title className='m-1'>
        System analysis
      </Card.Title>
    <div className='m-1'>
       <b>Give loan</b>: {goodDebts>badDebts?<span className='text-success'>client is safe for furthur loans</span>:<p className='text-danger'>'do not give'</p>}
      <br></br>
        <b>Score </b>: {`${score.toFixed(3)}%`}
    </div>
    </Card>
   </Col>
</Row>

    </Container>
    </div>
 
    </>
   
  );
}
