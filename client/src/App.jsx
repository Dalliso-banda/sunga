import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import LoginPage from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import FAQPage from './pages/FAQs.jsx'
import SignUp from './pages/SignUpPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ClientHistory from './pages/ClientHistory.jsx' 

const router = createBrowserRouter(
[
{
   path: '/',
  element:<Home/>
 
},
{
   path: '/signup',
  element:<SignUp/>
 
},
{
   path: '/login',
  element:<LoginPage/>
 
},
{
   path: '/dashbored',
  element:<DashBoard/>

 
},{
   path: '/FAQs',
  element:<FAQPage/>
 
},{
   path: '/clienthistory',
  element:<ClientHistory/>
 
}

]

)

function App() {
  

  return (
    <>
    <div className="w-100">
<RouterProvider router={router}/>
</div>
    </>
  )
}

export default App
