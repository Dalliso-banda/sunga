import { Col, Container, Row,Card, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";





export default function DashBoardSlider({status,email,name,number}) {   

return(<>
<Container className="d-flex  shadow-sm  m-2 p-2  g-3  h-25 justify-content-space-between align-items-center w-100">
<div  className='border-2 '>
    <Image src='../../public/vite.svg' className=" m-3 w-100"></Image>
    </div>
    <div className="m-auto">
        <h4> 
        {name}    {name}
        </h4>
        <p>
        {number}
        </p>

        <Button variant={status==='cleared'?'success':'danger'}>  {status}</Button>
    </div>
</Container>
</>)

}