import React from 'react'
import SectionTitle from '../global/SectionTitle'
import { CarouselSize } from '../global/CarouselSize'

function PopularCities() {
  return (
      <section className='section'>
          <SectionTitle text='popular cities' />
          <div className='container main-container grid place-items-center'>
              <CarouselSize />
          </div>
    </section>
  )
}

export default PopularCities