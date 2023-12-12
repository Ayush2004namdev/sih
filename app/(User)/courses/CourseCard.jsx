import Link from 'next/link'
import React from 'react'

const CourseCard = (props) => {
    const {title,link,src,id} = props
    const handleSomeClick = (id) => {
        window.location.href=`/course/${id}`
    }


  return (<>
    <Link href={`/course/${id}`}>
    <div className='w-full relative cursor-pointer items-center flex flex-col justify-between bg-white py-4 my-2 mx-1 rounded-xl'>
    <Link href={`/course/${id}`}>
     <div className="absolute inset-0"></div>
        <div onClick={() => handleSomeClick(id)} className="w-50">
        <Link href={`/course/${id}`}>
            <iframe src={src}></iframe>
        </Link>
        </div>

        <h1>Title : {title}</h1>
    {/* <script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script> */}
    </Link>
    </div>
    </Link>
  </ >
  )
}

export default CourseCard