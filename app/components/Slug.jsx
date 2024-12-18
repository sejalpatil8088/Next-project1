import React from 'react'

const Slug = ({ title }) => {
    const cleanedTitle = decodeURIComponent(title); 

  return (
    <div>
       <h1 className='text-5xl font-bold'>{cleanedTitle.split("-").join(" ")}</h1>
    </div>
  )
}

export default Slug;

