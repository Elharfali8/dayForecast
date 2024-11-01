import React from 'react'

function WeatherTitle({text}: {text:string}) {
  return (
      <h2 className=" uppercase text-lg lg:text-xl poppins-medium tracking-wide text-secondary mb-2 lg:mb-4 dark:text-gray-300">{text}</h2>
  )
}

export default WeatherTitle