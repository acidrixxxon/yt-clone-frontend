import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom'
import MobileNav from './components/MobileNav/MobileNav';
import VideoPage from './pages/VideoPage/VideoPage';
import Historypage from './pages/History/Historypage';
import Subscriptionspage from './pages/Subscriptions/Subscriptionspage';
import Librarypage from './pages/Library/Librarypage';
import Searchpage from './pages/Search/Searchpage';
import { useDispatch } from 'react-redux'
import { getMe } from './redux/actions/userActions';
import ChannelPage from './pages/ChannelPage/ChannelPage';
import Watchlater from './pages/Watchlater/Watchlater';

function App() {
  const [ sidebar,setSidebar ] = React.useState(true)

  const dispatch = useDispatch()

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }

  React.useEffect(() => {
    dispatch(getMe())
  },[])

  return (
    <div className='app'>
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
            <Route path="/channel/:id" element={<ChannelPage />} /> 
            <Route path="/watchlater" element={<Watchlater />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
