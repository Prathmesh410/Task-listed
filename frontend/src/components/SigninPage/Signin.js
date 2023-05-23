import React, { useEffect, useMemo, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import SigninForm from "./SigninForm";
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [user, setUser] = useState("");
  const [register,setRegister] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    {user !== null? navigate('/') : navigate('/signin')}
  }, [user,navigate]);

  useMemo(() => setUser(localStorage.getItem("email"))
  , [])  
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  const handleResister = (e) =>{
    setRegister(true);
  }
  // console.log(register);
  return (
    <div className="max-w-500 ">
      <h3 className="font-bold text-4xl leading-11 tracking-wide">{register ? 'Sign up' : 'Sign in'}</h3>
      <p className="font-normal text-base leading-5 mt-1">{register ? 'Sign up ' : 'Sign in '}to your account</p>
      <div className="flex justify-between mt-6">
        <div className="rounded-xl h-8 w-48 bg-white shadow-sm
          mr-3 flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <FcGoogle className="text-xl"/>
          <p
            className="bg-white text-gray-400
           hover:text-gray-600 ml-3
         font-normal text-sm"
          >
            Sign in with Google
          </p>
        </div>
        <div
          className="rounded-xl h-8 w-48 bg-white shadow-sm ml-3 flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <GrApple className="text-lg text-gray-400"/>
          <p className="bg-white text-gray-400
           hover:text-gray-600 ml-3
         font-normal text-sm">Sign in with Apple</p>
        </div>
      </div>
        <SigninForm register = {register} setRegister = {setRegister} setUser = {setUser}/>
        <div className='flex mt-6 item-center justify-center' > 
          <p className="font-small text-base leading-5 font-light text-gray-600" > have an account?</p>
          <p className="font-small text-base leading-5 font-light text-blue-600 ml-1 cursor-pointer" onClick={handleResister}>Register here</p>
        </div>
    </div>
    
  );
}

export default Signin;
