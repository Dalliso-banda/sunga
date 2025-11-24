import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


export default function RegisterClientButton(){
         return(
     <div>
            <Button variant='success' style={{width:'7em',height:'2.5em'}}>


      <Link className='nav-link text-center' to={'/uploadClient'}>
               new client
                </Link>
            </Button>
            </div>
         )
}