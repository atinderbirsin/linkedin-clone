import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../images/Logo.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { auth } from '../firebase';
import { Loader } from '../components/Loader';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isshow, SetIsShow] = useState(true);
  const [isvalid, SetIsValid] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  const createUser = async (email, password, displayName) => {
    setLoading(true);
    const userCreated = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => {
      if (err) {
        alert('Email already in use');
      }
    });

    await updateProfile(userCreated.user, {
      displayName: displayName,
    }).catch((err) => {
      alert(`${err.code} ${err.message}`);
    });

    if (userCreated) {
      dispatch(
        login({
          email: userCreated.user.email,
          displayname: userCreated.user.displayName,
          uid: userCreated.user.uid,
          emailVerified: userCreated.user.emailVerified,
        })
        );
        setLoading(false);

      return true;
    }
  };

  async function onFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      SetIsValid(false);
    } else {
      SetIsValid(true);
      const userCreated = await createUser(email, password, name);
      if (userCreated) {
        navigate('/', { replace: true });
      }
    }
  }

  return (
    <div className="h-screen bg-[#f3f2ef] flex flex-col">
      {loading ? <Loader /> : null}
      <div className="px-14 py-8 justify-start">
        <img className="h-8" src={img} alt="logo" />
      </div>

      <div className="flex h-full flex-col items-center justify-start ">
        <h1 className="text-4xl pb-8">
          Make the most of your professional life
        </h1>

        <div className="p-6 py-10 w-96 shadow-xl mb-10 rounded-lg bg-white">
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="mb-6 relative">
              <label className="text-sm text-tint">Name</label>
              <input
                className="border w-full border-black px-2 focus:outline-none rounded-[4px] h-8 text-sm mt-1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-red-400 text-sm">
                {isvalid ? '' : 'Please enter a name'}
              </p>
            </div>

            <div className="mb-6">
              <label className="text-sm text-tint">Email or Phone number</label>
              <input
                className="border w-full border-black px-2 focus:outline-none rounded-[4px] h-8 text-sm mt-1"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-400 text-sm">
                {isvalid ? '' : 'Please enter a valid email or mobile number'}
              </p>
            </div>

            <div className="mb-6 relative">
              <label className="text-sm text-tint">
                Password (6 or more characters)
              </label>
              <label
                className="absolute right-2 top-8 cursor-pointer text-tint border-b border-b-transparent hover:border-b-tint"
                onClick={() => SetIsShow(!isshow)}
              >
                {isshow ? 'Show' : 'Hide'}
              </label>
              <input
                className="border w-full border-black px-2 focus:outline-none rounded-[4px] h-8 text-sm mt-1"
                type={isshow ? 'password' : 'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-400 text-sm">
                {isvalid ? '' : 'Please enter a password'}
              </p>
            </div>

            <p className="px-2 py-1 text-xs text-center mb-4">
              By clicking Agree & Join, you agree to the LinkedIn{' '}
              <span className="text-blue-70 hover:border-b-blue-70 border-b border-b-transparent font-medium">
                <Link to="/">User Agreement</Link>
              </span>
              ,{' '}
              <span className="text-blue-70 hover:border-b-blue-70 border-b border-b-transparent font-medium">
                <Link to="/">Privacy Policy</Link>
              </span>
              , and{' '}
              <span className="text-blue-70 hover:border-b-blue-70 border-b border-b-transparent font-medium">
                <Link to="/">Cookie Policy</Link>
              </span>
              .
            </p>

            <button
              type="submit"
              onClick={(e) => onFormSubmit(e)}
              className="w-full bg-blue-70 hover:bg-blue-80 text-white py-3 rounded-full font-medium"
            >
              Agree & join
            </button>
          </form>
          <p className="text-center mt-5">
            Already on LinkedIn?{' '}
            <span className="text-blue-70 cursor-pointer font-medium">
              <Link to="/">Sign in</Link>
            </span>
          </p>
        </div>
      </div>

      <footer className="">Footer</footer>
    </div>
  );
}

export default Signup;
