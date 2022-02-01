import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [ sidebar,setSidebar ] = React.useState(false)

  const handleToggleSidebar = () => {
    // setSidebar(value => !value)
  }


  return (
    <div className="wrapper">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

          <Routes>
            <Route path="/" element={<Homepage />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
