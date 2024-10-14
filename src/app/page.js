import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import React from 'react'




const page = () => {
  return (
    <div className=''>
      <Hero/>
      <Faq />
      <Reviews />
      <Products />
    </div>
  )
}

export default page
