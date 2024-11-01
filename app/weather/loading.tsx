import React from 'react'

function loading() {
  return (
    <main className='min-h-[calc(100vh-80px)] p-4 md:p-8 grid place-items-center '>
        <div className="container main-container card h-full rounded-[8px] p-2 grid place-items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl poppins-semibold tracking-wider">Loading...</h1>
        </div>
        </main>
  )
}

export default loading