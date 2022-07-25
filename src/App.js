import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/user/userSlice';
import Login from './pages/Login';


function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app h-full">
    
    {user ? <Login /> : (
      <>
        <Header />

        <div className="flex bg-trans-2 h-full pt-5">
          <Sidebar />
          <Feed />
          <div className='flex-2'></div>
        </div>
        {/* App body */}
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
      </>
    )}
    </div>
  );
}

export default App;
