import { use, useEffect } from "react";
import { Col, Container, Row,Card, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";





export default function ProfileHolder({name,number,has_paid
}) {   


    useEffect   (() => {
        document.title = 'Client History - Sunga';
    }, []);


return(<>
<Container className="d-flex  shadow-sm  m-2 p-2 border  g-3  h-25 justify-content-space-between align-items-center w-100">
<div  className='border-2 '>
    <Image src='../../public/vite.svg' className=" m-3 w-100"></Image>
    </div>
    <div className="m-auto">
        <h4> 
        {name}   
        </h4>
        <p>
      <a href={`tel:${number}`}>{number}</a>
        </p>

        <Button variant={has_paid?'success':'danger'}>{has_paid?'cleard':'pending'}</Button>
    </div>
</Container>
</>)

}