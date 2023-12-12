'use client'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie';



const Home = () => {

  useEffect(() => {
    const something = Cookies.get('token')
    if(!something){
      window.location.href='/login'
    }
  },[])
  return (
    <div>Hiiii</div>
  )
}

export default Home;