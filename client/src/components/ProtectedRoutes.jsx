import {useUser} from '../contexts/UserAuthContext.jsx'
import { Navigate,Outlet } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

export default function ProtectedRoutes() {
    const {isLoggedin,isLoading}=useUser();
    if(isLoading){
        return <div className='d-flex justify-content-center align-items-center mt-5'><Spinner variant='primary' ></Spinner>.</div>
    }
  return (
    isLoggedin ? <Outlet/> : <Navigate to="/login"/>
  )
}