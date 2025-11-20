import { Container,Card} from "react-bootstrap";
import Nav from '../components/Nav.jsx'


export default function FAQs(){
   const faqs = [
     {
       summary: 'What is Sunga?',
       details:
       'Sunga is an online platform designed to manage small money lending by storing and tracking loans, repayments, and borrower information.'
     },
     {
       summary: 'Is Sunga Free?',
       details:
       'Sunga is currently free to use. There are no hidden fees or charges for using the platform.'
     },
     {
       summary: 'How is my data stored?',
       details:
       'Sunga stores your data in a secure VPS database. We prioritize the security and privacy of your information.'
     },
     {
       summary: 'Who developed Sunga?',
       details:
       'Developed by Dalitso Banda as a personal project to streamline managing small money lending.'
     }
   ]
   
   return (
     <>
       <Nav />
       <h1 className="m-2"><b>FAQs</b></h1>
       <Container>
       {faqs.map((faq, idx) => (
         <Card key={idx} className="mb-3 p-3">
         <Card.Body>
           <details>
             <summary>{faq.summary}</summary>
             <Card.Text>{faq.details}</Card.Text>
           </details>
         </Card.Body>
         </Card>
       ))}
       </Container>
     </>
   )
}