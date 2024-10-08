import React from 'react';
import NavBar from './components/navBar'
import './App.css';
import Table from './pages/Table'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className = 'navBar'>
        <NavBar  style = "navBar"/>
      </div>
      <div className='rota'>
        <Home/>
        {/* <Table/> */}
      </div>
    </>
  );
}

export default App;
