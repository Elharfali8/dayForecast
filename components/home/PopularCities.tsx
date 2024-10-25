import React from 'react'
import SectionTitle from '../global/SectionTitle'
import { CarouselSize } from '../global/CarouselSize'

function PopularCities() {
  return (
      <section className='py-10 lg:py-18'>
          <SectionTitle text='popular cities' />
          <div className='container main-container grid place-items-center'>
              <CarouselSize />
          </div>
    </section>
  )
}

export default PopularCities