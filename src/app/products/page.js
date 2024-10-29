import Advantage from '@/components/products/Advantage';
import CamioSeries from '@/components/products/CamioSeries';
import Hero from '@/components/products/Hero';
import KeyFeatures from '@/components/products/KeyFeatures';
import Products from '@/components/products/Products';
import ProductsTab from '@/components/products/ProductsTab';
import WhyCamio from '@/components/products/WhyCamio';
import WhyChoose from '@/components/products/WhyChoose';
import React from 'react';
import tpuSeries1 from '@/assets/tpuSeries1.png';
import tpuSeries2 from '@/assets/tpuSeries2.png';
import tpuSeries3 from '@/assets/tpuSeries3.png';
import tpuSeries4 from '@/assets/tpuSeries4.png';

const Page = () => {
  const products = [
    {
      name: "Camio TPU Clear Gloss",
      image: tpuSeries1, 
      id: 1,
      details: "Details about Camio TPU Clear Gloss.",
    },
    {
      name: "CAMIO TPU Black Gloss",
      image: tpuSeries2,
      id: 2,
      details: "Details about CAMIO TPU Black Gloss.",
    },
    {
      name: "CAMIO TPU Clear Matte",
      image: tpuSeries3,
      id: 3,
      details: "Details about CAMIO TPU Clear Matte.",
    },
    {
      name: "CAMIO TPU Another Matte",
      image: tpuSeries4,
      id: 4,
      details: "Details about CAMIO TPU Another Matte.",
    },
  ];

  return (
    <div>
      <Hero />
      <WhyCamio products={products} />
      <Products />
      <KeyFeatures />
      <WhyChoose />
      <CamioSeries />
      <ProductsTab />
      <Advantage />
    </div>
  );
};

export default Page;
