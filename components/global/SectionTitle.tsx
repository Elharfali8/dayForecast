import React from 'react'

function SectionTitle({text}: {text:string}) {
  return (
      <div className='grid place-items-center mb-8 lg:mb-12'>
          <h1 className='text-2xl  md:text-3xl capitalize tracking-wide poppins-medium lg:text-4xl'>{text}</h1>
    </div>
  )
}

export default SectionTitle