import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
[
{
   path: '/',
  element:<Home/>
 
},
{
   path: '/signup',
  element:<Nav/>
 
},
{
   path: '/login',
  element:<Nav/>
 
},
{
   path: '/dashbored',
  element:<Nav/>

 
},{
   path: '/FAQs',
  element:<Nav/>
 
}

]

)

function App() {
  

  return (
    <>
<RouterProvider router={router}/>

    </>
  )
}

export default App
