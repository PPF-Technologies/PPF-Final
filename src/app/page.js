import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import React from 'react'
import Car from '@/components/Car'
import WhyUs from '@/components/WhyUs'
import TopPicks from '@/components/TopPicks'




const page = () => {
  return (
    <div className=''>
      <Hero/>
      <WhyUs />
      <TopPicks />
      <Car />
      <Reviews />
      <Faq />
    </div>
  )
}

export default page
