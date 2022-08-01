import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Widgets from './components/Widgets';
import { Loader } from './components/Loader';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
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
      setLoading(false);
    })

    return () => {
      dispatch(logout());
    };
  }, [dispatch]);

  return (
    <div className="h-full">
      {loading ? <Loader /> : null}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="w-full bg-trans-2">
            <div className="flex h-full pt-5 justify-center">
              <div className="flex w-10/12 justify-center">
                <Sidebar  />
                <Feed  />
                <Widgets  />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
