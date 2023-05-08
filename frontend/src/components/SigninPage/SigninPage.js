import React from "react";
import Signin from "./Signin";
function SigninPage() {
  return (
  <div className="flex h-screen">
      <div className="w-1/3 h-screen 
     bg-black text-white flex items-center justify-center
      text-6xl font-bold">
      Board.
    </div>
    <div className="w-2/3 h-screen flex items-center justify-center bg-gray-200">
   <Signin />
    </div>
  </div>
  )
}

export default SigninPage;
