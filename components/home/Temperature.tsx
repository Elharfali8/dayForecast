'use client'

import React, { useState } from 'react'
import SectionTitle from '../global/SectionTitle'
import GlobalTemperatureMap from './GlobalTemeratureMap'
import { layers } from '@/utils/data'

function Temperature() {
  const [currentLayer, setCurrentLayer] = useState('clouds_new')

  const handleLayers = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value
    setCurrentLayer(value)
  }

  return (
    <div className="container main-container py-10 lg:py-18">
      <SectionTitle text="Global temperature Map" />
      <div className='mb-4 lg:mb-6 grid place-items-center'>
        <div className='flex items-center flex-wrap gap-4'>
          {layers.map((item) => {
            const { id, title, layer } = item
            return (
              <button type="button" key={id} value={layer} onClick={handleLayers} className={`px-4 py-1 rounded-[6px] capitalize  text-lg tracking-wide border shadow-md ${currentLayer === layer && 'button'}`}>
                {title}
              </button>
            )
            })}
        </div>
      </div>
      {/* <GlobalTemperatureMap currentLayer={currentLayer} /> */}
      
      </div>
  )
}

export default Temperature