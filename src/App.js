import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import MobileNav from './components/MobileNav/MobileNav';
import VideoPage from './pages/VideoPage/VideoPage';
import Historypage from './pages/History/Historypage';
import Subscriptionspage from './pages/Subscriptions/Subscriptionspage';
import Librarypage from './pages/Library/Librarypage';
import Searchpage from './pages/Search/Searchpage';

function App() {
  const [ sidebar,setSidebar ] = React.useState(true)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }


  return (
    <div className="wrapper">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <MobileNav />
      <div className='app__container'>
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/history" element={<Historypage />} />
            <Route path="/subscriptions" element={<Subscriptionspage />} />
            <Route path="/library" element={<Librarypage />} />
            <Route path="/search/q=:query" element={<Searchpage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
