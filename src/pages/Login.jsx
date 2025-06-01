import { useAuth } from '../context/AuthContext';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const { setUser } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Finance Tracker Login</h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition mb-4"
        >
          Sign in with Google
        </button>
        <div className="text-center text-gray-500">or</div>
        <form className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
            disabled
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"
            disabled
          />
          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed"
            disabled
          >
            Sign in (coming soon)
          </button>
        </form>
      </div>
    </div>
  );
}



/*import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Logo from "/logo.png"
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch {
      alert('Google login failed');
    }
  };

  return (
    <div>
      <div className=" fixed w-full  px-0 py-0 flex justify-between">
        <div className=" text-2xl flex justify-center items-center">
            <img src={Logo}  alt="Logo" width={130}  />
            <h2>Finance Tracker</h2>
        </div>
    </div>
    <div className="h-screen pt-40 ">
      
    <div className="p-4 border bg-white flex flex-col justify-center items-center max-w-sm mx-auto rounded-xl shadow">
      
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
      <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex justify-center gap-2 shadow-[#333] shadow-xs border-black border-1 transition-all ease-in hover:text-green-600 hover:border-green-600 rounded-4xl cursor-pointer items-center p-3"
        >
         <FcGoogle className="text-3xl"/> Login with Google
        </button>
        <p className="flex py-1 justify-between gap-5 items-center"><hr className="text-[#333b] w-full" /> or <hr className="text-[#333b] w-full"  /></p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="ëmail"
          placeholder="Email"
          className="w-full border p-2 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           autoComplete="on"
        />
         <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full border p-2 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           autoComplete="on"
        />
        <button className="w-full bg-green-600 hover:bg-green-500 cursor-pointer text-white p-3 rounded-4xl" type="submit">
          Login with Email
        </button>
        
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
*/