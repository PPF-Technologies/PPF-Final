import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
          {/* Image Section */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <img
              src="/hero.svg" // Directly use the path from the public folder
              alt="Hero SUV"
              className="w-full h-auto md:w-[990px] md:h-[475px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-[395px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Unmatched Protection, Unbeatable Shine with Camio PPF
            </h1>
            <p className="mb-6 text-sm md:text-base">
              Protect your vehicle with Camio's top-quality Paint Protection
              Film. Experience superior protection and lasting shine.
            </p>
            <button
              className="bg-[#F4F7FE] text-[#4174F4] hover:bg-[#4174F4] hover:text-[#F4F7FE] text-sm md:text-base px-8 py-3 md:px-10 md:py-3 rounded-full border border-transparent"
              style={{
                width: "auto", // Allow button to size based on its content
              }}
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
