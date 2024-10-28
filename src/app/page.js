import Faq from '@/components/home/Faq'
import Hero from '@/components/home/Hero'
import Reviews2 from '@/components/home/Reviews2'
import React from 'react'
import Car from '@/components/home/Car'
import WhyUs from '@/components/home/WhyUs'
import TopPicks from '@/components/home/TopPicks'
import Protection from '@/components/home/Protection'
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
