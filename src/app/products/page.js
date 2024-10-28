import Advantage from '@/components/products/Advantage'
import CamioSeries from '@/components/products/CamioSeries'
import Hero from '@/components/products/Hero'
import KeyFeatures from '@/components/products/KeyFeatures'
import Products from '@/components/products/Products'
import ProductsTab from '@/components/products/ProductsTab'
import WhyCamio from '@/components/products/WhyCamio'
import WhyChoose from '@/components/products/WhyChoose'
import React from 'react'





const Page = () => {
  return (
    <div>
      <Hero />
      <WhyCamio />
      <Products />
      <KeyFeatures />
      <WhyChoose />
      <CamioSeries />
      <ProductsTab />
      <Advantage />
    </div>
  )
}

export default Page
