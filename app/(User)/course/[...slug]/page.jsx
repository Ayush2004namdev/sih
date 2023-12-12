'use client'
import Navbar from '@/Components/NavbarForOthers'
import React from 'react'

const page = (req) => {
    const id = req.params.slug
  return (
    <>
    <Navbar/>
    <div className="flex w-full    justify-center">
    <div className="w-[39%] object-contain h-screen">
    <iframe src={`https://dragline-center.h5p.com/content/${id}/embed`} aria-label="मूल्यांकन" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
    </div>
    </div>
    <div>page</div>
    </>
  )
}

export default page