import { useState } from 'react';
import img from '../images/Logo.png';
// import { Link } from "redux";


function Login() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className="h-screen flex flex-col">
      
      
      <div className="px-14 py-8 justify-start">
        <img className="h-7" src={img} alt="logo" />
      </div>


      <div className="flex h-full flex-col items-center justify-center">
        <div className='p-6 py-10 w-80 shadow-xl mb-10'>
        <div className="pb-5">
          <h1 className="text-3xl font-semibold pb-1">Sign in</h1>
          <p className="text-sm">Stay updated on your professional world</p>
        </div>
        <form>
          <div className="relative mb-6">
            <label className="absolute text-xs left-2 pt-1">
              Email or Phone
            </label>
            <input
              className="border w-full border-black px-2 pt-5 focus:outline-none rounded-md text-lg"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="relative mb-2">
            <label className="absolute text-xs left-2 pt-1 z-50">
              Password
            </label>
            <label className="absolute text-sm z-50 right-2 cursor-pointer mt-3 hover:bg-blue-100 px-2 rounded-xl text-blue-70 font-medium">
              show
            </label>
            <input className="border w-full border-black px-2 pt-5 focus:outline-none rounded-md text-lg" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
        </form>
        <button className="text-blue-70 px-2 py-1 hover:bg-blue-100 rounded-xl font-medium mb-4">Forgot Password</button>

        <button className="w-full bg-blue-70 hover:bg-blue-80 text-white py-3 rounded-full font-medium">Sign in</button>
        </div>

        <p>New to LinkedIn? <span className="text-blue-70 cursor-pointer font-medium">Join now</span></p>
      </div>



      <footer className="">Footer</footer>
    </div>
  );
}

export default Login;
