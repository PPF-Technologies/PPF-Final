import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Reviews2 from '@/components/Reviews2'
import React from 'react'
import Car from '@/components/Car'
import WhyUs from '@/components/WhyUs'
import TopPicks from '@/components/TopPicks'
import Protection from '@/components/Protection'
import { FaWhatsapp } from "react-icons/fa";




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
      <a href="https://wa.me/728377971?text=awesome product"><FaWhatsapp className='text-[50px] fixed bottom-14 right-14 text-green-400' /></a>
    </div>
  )
}

export default page
