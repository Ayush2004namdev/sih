'use client'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import Example from '@/Components/example';



const Home = () => {

  useEffect(() => {
    const something = Cookies.get('token')
    if(!something){
      window.location.href='/login'
    }
  },[])
  return (
    <>
    <div className="h-screen w-full">
    <Example/>
    </div>
    </>
  )
}

export default Home;