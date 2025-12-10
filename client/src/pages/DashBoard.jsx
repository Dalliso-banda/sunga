import React from 'react';
//Hi chris best mentor in the World
import DashBoardCards from '../components/DashboardBorrowerCards.jsx';
import DahsBoardSlider from '../components/DashBoardSlider.jsx';
import NavBar from '../components/Nav.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useUser } from '../contexts/UserAuthContext.jsx';


export default function DashBoard() {
  

  const {userData}=useUser();

  return (
   <>
   <NavBar />
      <h1 className='m-3'>welcome {userData.businessname}</h1>
      <section>
        <div className='d-flex justify-content-space-between'>
            <DahsBoardSlider/>
        </div>
    
      </section>
      <SearchBar/>
    <div>
         
         <section>
            <DashBoardCards/>
            </section>
    </div>
    </>
  );
}