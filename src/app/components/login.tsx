import {signIn } from "next-auth/react";

const LoginComponent = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
       <div className='flex flex-col items-center mb-8'>
         <h1 className='heading-fontSize font-bold'>Welcome to </h1>
         <img src="/images/logo.svg" alt="Logo" width={200} height={200} />
       </div>
      <button onClick={() => signIn("google", { prompt: "select_account" })} className='bg-primary flex items-center gap-4 p-2 rounded-md cursor-pointer'>
        <img src="/images/google.svg" alt="Logo" width={20} height={20} />
        <span className='text-black subparagraph-fontSize'>Sign up with Google</span>
      </button>
    </div>
  )
}

export default LoginComponent
