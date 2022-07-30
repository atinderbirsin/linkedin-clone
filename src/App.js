import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app h-full">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="flex bg-trans-2 h-full pt-5">
            <Sidebar />
            <Feed />
            <div className="flex-2"></div>
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
