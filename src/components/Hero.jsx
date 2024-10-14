import Link from "next/link";
import React from "react";
import ellipse from "@/assets/Ellipse.png";
import Image from "next/image";
import scooty from "@/assets/heroscooty.png";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center h-[100vh] bg-gradient-to-bl from-[#FFFFFF] to-[#cdebf8] relative -z-10">
        <Image
          src={ellipse}
          width={"full"}
          height={"full"}
          className="absolute left-[50%] bottom-[5%] -z-10 opacity-50"
        />
        <div className="absolute right-0 top-0 h-full w-24">
          {/* Blue Stripe */}
          <div className="h-1/2 bg-gradient-to-tr from-[#9AE0D3] via-[#5dd1c9] to-[#35A7A0] flex items-center justify-center">
            <p className="rotate-90 text-white font-bold">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          {/* Green Stripe */}
          <div className="h-1/2 bg-gradient-to-br from-[#89C8DD] to-[#73ADC1] flex items-center justify-center">
            <p className="rotate-90 text-white font-bold ">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start h-full justify-center w-[50%] px-14">
          <div>
            {/* Heading with subtle fade-in animation */}
            <h1 className="text-5xl pb-8 text-gray-600 leading-tight animate-fadeIn">
              <span className="font-semibold bg-gradient-to-tr text-6xl from-green-400 to-blue-600 bg-clip-text text-transparent">
                Unmatched
              </span>{" "}
              Protection,{" "}
              <span className="font-semibold bg-gradient-to-tr text-6xl from-green-400 to-blue-600 bg-clip-text text-transparent">
                Unbeatable
              </span>{" "}
              Shine with <span className="text-6xl">CAMIO PPF</span>
            </h1>

            {/* Tagline with adjusted width and subtle animation */}
            <p className="text-gray-500 text-lg pb-10 w-[30rem] leading-relaxed animate-fadeIn delay-1s">
              Shield your vehicle with CAMIO’s top-tier Paint Protection Film,
              trusted by professionals worldwide
            </p>

            {/* CTA Button */}
            <Link href={"/"} className="">
              <button className="bg-gradient-to-r from-[#6EDACB] to-[#4FC0A7] border-2 text-white text-sm px-10 py-3 rounded-full font-bold border-transparent shadow-lg hover:from-[#5EC6B8] hover:to-[#3AA38A] hover:border-[#5EC6B8] transition-colors ease-in-out duration-300 focus:ring-4 focus:ring-[#5EC6B8]/50">
                PRE-ORDER
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[50%] flex flex-col items-center">
          <Image src={scooty} width={500} />
          <div className="border-2 p-4 rounded-xl border-blue-200 backdrop-blur-md w-[28rem] text-gray-800 mt-4">
            Shield your vehicle with CAMIO’s top-tier Paint Protection Film,
            trusted by professionals worldwide
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
