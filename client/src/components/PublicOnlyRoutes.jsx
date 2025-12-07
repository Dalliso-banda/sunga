import {useUser} from '../contexts/UserAuthContext.jsx'
import { Navigate,Outlet } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

export default function PublicOnlyRoutes() {
    const {isLoggedin,isLoading}=useUser();
    console.log(isLoggedin)
    if(isLoading){
        return <div className='d-flex justify-content-center align-items-center mt-5'><Spinner variant='primary' ></Spinner>.</div>
    }
  return (
    isLoggedin ===false? <Outlet/> : <Navigate to="/dashboard"/>
  )
}