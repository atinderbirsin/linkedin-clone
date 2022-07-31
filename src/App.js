import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';

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
      }
    });

    return () => {
      dispatch(logout())
    };
  }, [dispatch]);

  return (
    <div className="app h-full">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="w-full bg-trans-2">
            <div className="flex h-full pt-5 align-center justify-center">
              <div className="flex">
                <Sidebar />
                <Feed />
                <div></div>
              </div>
            </div>
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
