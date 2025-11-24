import React from 'react';
//Hi chris best mentor in the World
import DashBoardCards from '../components/DashboardBorrowerCards.jsx';
import DahsBoardSlider from '../components/DashBoardSlider.jsx';
import NavBar from '../components/Nav.jsx';
import SearchBar from '../components/SearchBar.jsx';


export default function DashBoard() {
  return (
   <>
   <NavBar />
      <h1 className='m-3'>sunga</h1>
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