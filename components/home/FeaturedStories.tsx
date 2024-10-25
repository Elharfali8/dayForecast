import React from 'react'
import SectionTitle from '../global/SectionTitle'
import { stories } from '@/utils/data'
import Image from 'next/image'

function FeaturedStories() {
  return (
      <section className='py-10 lg:py-18 featured-bg'>
          <SectionTitle text='featured weather stories' />
          <div className="container main-container grid lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-8">
              {stories.map((item) => {
                  const { image, id, title, description } = item
                  return (
                      <article className='secondary-card rounded-[9px] overflow-hidden shadow-md h-full' key={id}>
                          <Image src={image} alt={title} className='w-full object-cover h-full max-h-[200px]' />
                          <div className='p-4'>
                              <h3 className='mb-1 text-lg sm:text-xl xl:text-2xl poppins-medium tracking-wide'>{title}</h3>
                              <p className='md:text-lg text-secondary mb-3'>{description}</p>
                              <button type='button' className='button '>read more</button>
                          </div>
                      </article>
                  )
              })}
          </div>
    </section>
  )
}

export default FeaturedStories