import React from 'react';


const Login = () => {
  return (
    <div className='bg-gray-200 h-screen flex items-end justify-center  '>
        <div className='bg-white w-6/12  rounded-t-2xl shadow-xl relative'>
            
            <div className='px-12 py-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-t-2xl'>
                <h1 className='text-center font-semibold text-4xl'>Hi! User</h1>
                <form className='space-y-6'>
                
                    <div className='flex flex-col'>
                        <label className='text-white-300 mb-2 font-medium text-lg'>Username</label>
                        <input className='p-3 rounded'
                         placeholder='username@gmail.com'
                         required
                         name="email"
                         type='email'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-white-300 mb-2 font-medium text-lg'>Username</label>
                        <input className='p-3 rounded'
                         placeholder='*******'
                         required
                         name="password"
                         type='password'
                        />
                    </div>
                    <button className='bg-zinc-950 px-6 py-3 rounded text-white'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;
