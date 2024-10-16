import Faq from '@/components/Faq'
import Grid1 from '@/components/Grid1'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import React from 'react'
import Grid2 from '@/components/Grid2'
import Car from '@/components/Car'
import BentoGrid from '@/components/BentoGrid'






const page = () => {
  return (
    <div className=''>
      <Hero/>

      <Products />
      <Grid1 />
      <Grid2 />
      {/* <Car /> */}
      {/* <BentoGrid /> */}
      <Reviews />
      <Faq />
    </div>
  )
}

export default page
