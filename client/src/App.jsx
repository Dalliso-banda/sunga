import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import Nav from './components/Nav.jsx'
import LoginPage from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import FAQPage from './pages/FAQs.jsx'
import SignUp from './pages/SignUpPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ClientHistory from './pages/ClientHistory.jsx' 
import UploadClient from './pages/UploadClient.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TsAndCs from './pages/Ts&Cs.jsx'
import {useUser} from './contexts/UserAuthContext.jsx'
import KnowledgeBase from './pages/KnowledgeBase.jsx'
import AboutUs from './pages/AboutUs.jsx'

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
   path: '/dashboard',
  element:<DashBoard/>

 
},{
   path: '/FAQs',
  element:<FAQPage/>
 
},{
   path: '/clienthistory',
  element:<ClientHistory/>
 
},{
   path: '/uploadclient',
  element:<UploadClient/>
 
},
{
   path: '/privacypolicy',
  element:<PrivacyPolicy/>
 
},
{
   path: '/termsandconditions',
  element:<TsAndCs/>
 
}
,
{
   path: '/knowledgebase',
  element:<KnowledgeBase/>
 
},
{
   path: '/aboutus',
  element:<AboutUs/>
 
}
]

)

function App() {
  const {isLoading}=useUser();

  return (
    <>

      {isLoading ? (      <div className="w-100  d-flex mt-5 justify-content-center">
                <Spinner variant='primary'></Spinner>
            </div>) :
        <div className="w-100">
<RouterProvider router={router}/>
            </div>
}
  
          
   
    </>
  )
}

export default App
