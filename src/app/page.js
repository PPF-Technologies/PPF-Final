import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Reviews2 from '@/components/Reviews2'
import React from 'react'
import Car from '@/components/Car'
import WhyUs from '@/components/WhyUs'
import TopPicks from '@/components/TopPicks'
import Protection from '@/components/Protection'





const page = () => {
  return (
    <div className=''>
      <Hero/>
      <WhyUs />
      <TopPicks />
      <Car />
      <Protection />
      <Reviews2 />
      <Faq />
    </div>
  )
}

export default page
