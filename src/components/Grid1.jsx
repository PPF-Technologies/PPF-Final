import React from "react";
import camio1 from "@/assets/CAMIO2.png";
import Image from "next/image";
import QuoteBtn from "./QuoteBtn";


const services = [
  {
    title: "Single Feature MVP",
    description:
      "Skip the risk and jumpstart your vision. Our single-feature MVPs let you test concepts fast and affordably before going all in.",
    image: "https://placehold.co/400x300",
    alt: "Person presenting a digital dashboard on a tablet",
  },
  {
    title: "Pilot MVP Development",
    description:
      "Stop wasting time on features nobody wants. Our pilot MVP development solution helps you launch fast and iterate smart.",
    image: "https://placehold.co/400x300",
    alt: "Illustration of a person riding a rocket",
  },
  {
    title: "MVP Web Development",
    description:
      "Test your idea without the risk - we offer basic sites for a fraction of the cost.",
    image: "https://placehold.co/400x300",
    alt: "Person working on a futuristic digital interface",
  },
  {
    title: "Clickable Prototype",
    description:
      "Live and breathe your web and app concepts. We craft clickable prototypes that you can test and tweak before going live.",
    image: "https://placehold.co/400x300",
    alt: "People discussing a prototype on a computer screen",
  },
  {
    title: "Complete MVP Development",
    description:
      "To help you show your product to users or stakeholders, we develop the basic version with all the key features!",
    image: "https://placehold.co/400x300",
    alt: "Person working on a laptop with a development diagram on the screen",
  },
  {
    title: "MVP Consultation",
    description:
      "From validating your idea to prioritizing key features, we'll be your trusted partner in building your MVP.",
    image: "https://placehold.co/400x300",
    alt: "Computer screen showing a process diagram",
  },
];

const Grid1 = () => {
  return (
    <div className="bg-black relative text-white py-20 px-5 min-h-screen">
      <Image
        src={camio1}
        className="absolute left-1/2 top-20 -translate-x-1/2 z-0"
      />
      <h2 className="text-6xl font-semibold pt-10 text-center mb-10">
        Our Innovative Services
      </h2>
      <div className=" mx-auto px-32 py-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center my-20 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-1/3 h-auto rounded-2xl shadow-md"
            />
            <div className="w-1/2 p-6">
              <h3 className="text-5xl py-2 bg-clip-text text-transparent bg-gradient-to-b from-yellow-600 to-yellow-300 font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <QuoteBtn />
    </div>
  );
};

export default Grid1;
