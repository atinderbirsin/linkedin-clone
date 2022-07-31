import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/Logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux/es/exports';
import { login } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, SetIsShow] = useState('true');
  const [isValid, SetIsValid] = useState(true);
  const [user, SetUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // bg-[#f3f2ef]

  async function onFormSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      SetIsValid(false);
    } else {
      SetIsValid(true);
      await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            SetUser(user);
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                emailVerified: user.emailVerified,
              })
            );
            navigate('/', { replace: true });
          })
          .catch((error) => {
            alert(`${error.code} ${error.message}`);
          });
    }

  }

  return (
    <div className="h-screen  flex flex-col">
      <div className="px-14 py-8 justify-start">
        <img className="h-7" src={img} alt="logo" />
      </div>

      <div className="flex h-full flex-col items-center justify-center ">
        <div className="p-6 py-10 w-80 shadow-xl mb-10 rounded-lg bg-white">
          <div className="pb-5">
            <h1 className="text-3xl font-semibold pb-1">Sign in</h1>
            <p className="text-sm">Stay updated on your professional world</p>
          </div>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="relative mb-6">
              <label className="absolute text-xs left-2 pt-1">
                Email or Phone
              </label>
              <input
                className="border w-full border-black px-2 pt-5 focus:outline-none rounded-md text-lg"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-500 text-sm">
                {isValid ? '' : 'Please enter a valid email address'}
              </p>
            </div>

            <div className="relative mb-2">
              <label className="absolute text-xs left-2 pt-1 z-50">
                Password
              </label>
              <label
                onClick={() => SetIsShow(!isShow)}
                className="absolute text-sm z-50 right-2 cursor-pointer mt-3 hover:bg-blue-100 px-2 rounded-xl text-blue-70 font-medium"
              >
                {isShow ? 'Show' : 'Hide'}
              </label>
              <input
                type={isShow ? 'password' : 'text'}
                className="border w-full border-black px-2 pt-5 focus:outline-none rounded-md text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500 text-sm">
                {isValid ? '' : 'Please enter a password'}
              </p>
            </div>
            <button className="text-blue-70 px-2 py-1 hover:bg-blue-100 rounded-xl font-medium mb-4">
              Forgot Password
            </button>

            <button
              type="submit"
              onClick={(e) => onFormSubmit}
              className="w-full bg-blue-70 hover:bg-blue-80 text-white py-3 rounded-full font-medium"
            >
              Sign in
            </button>
          </form>
        </div>

        <p>
          New to LinkedIn?{' '}
          <span className="text-blue-70 cursor-pointer font-medium hover:bg-blue-100 rounded-full px-2 py-1">
            <Link to="sign-up">Join now</Link>
          </span>
        </p>
      </div>

      <footer className="">Footer</footer>
    </div>
  );
}

export default Login;
