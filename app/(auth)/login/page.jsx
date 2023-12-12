'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {
  const [err,setErr] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleLoginBtnClick =async (e) => {
    e.preventDefault()
    const data = await axios.post('/api/login',{password,email})
    console.log(data.data.msg)
    if(data.data.token){
      window.location.href = '/user';
    }
    else{
      setErr(data.data.msg)
    }
  }

  return (
    <>
   <div className="flex md:mx-auto md:max-w-2xl min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLoginBtnClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            {err ? <h1 className='border text-center border-red-400 px-2 py-1 rounded-lg text-red-600'>{err}</h1> : ''}
            
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start Your journey today
            </Link>
          </p>
        </div>
        <div className="mt-6">
            <hr />
            
            <div className="max-w-sm mx-auto">
            <a href="">
          <div className="h-16 px-3  bg-white mt-3 flex items-center shadow-md text-xl gap-6 justify-start rounded-full border-b-2">
            <img className="h-12 w-1/6 px-2 py-1 rounded-full bg-white" src="https://imgs.search.brave.com/vTCwcACTcg2o4L_XU9oOIfkA6VLpBo1CJ618ShAOhSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw" alt=""/>
            <p>Continue with Google</p>
          </div>
        </a>
        <a href="">
          <div className="h-16 px-3 py-2 bg-white mt-3 flex items-center shadow-md text-xl gap-6 justify-start rounded-full border-b-2">
            <img className="h-8 w-1/6 rounded-full bg-white" src="https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png" alt=""/>
            <p>Continue with Facebook</p>
          </div>
        </a>
            </div>
        </div>
      </div>
     </>
  )
}

export default Login