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
          className="  absolute left-[50%] bottom-[5%] -z-10 opacity-50"
        />
        <div className="flex flex-col items-center h-full justify-center w-[40%]">
          <div>
            <h1 className="text-2xl tracking-[14px] font-thin">
              LET'S RIDE THE
            </h1>
            <h1 className="text-8xl pb-10">FUTURE</h1>

            <p className="text-gray-500 pb-10">
              Simple and sleek design <br /> with users in mind.
            </p>
            <Link href={"/"}>
              <button className=" bg-[#6EDACB] border-2 text-white text-xs px-6 py-2 rounded font-bold border-[#5EC6B8]">
                PRE-ORDER
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[60%] flex flex-col items-center">
          <Image src={scooty} width={500} />
          <div className="border-2 p-4 rounded-xl border-blue-200 backdrop-blur-md">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            Magni, nisi ullam
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
