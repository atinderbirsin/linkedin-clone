import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, selectUser } from './features/user/userSlice';
import Login from './pages/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        dispatch(
          login(user)
        );
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])

  return (
    <div className="app h-full">
    
    {!user ? <Login /> : (
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
