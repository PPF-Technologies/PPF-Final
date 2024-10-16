import React from "react";
import underline from '@/assets/underline.png'
import Image from "next/image";


// Sample image URLs, replace these with actual URLs.
const productImages = {
  clearGloss:
    "https://via.placeholder.com/300x200.png?text=CAMIO+TPU+Clear+Gloss",
  blackGloss:
    "https://via.placeholder.com/300x200.png?text=CAMIO+TPU+Black+Gloss",
  matte: "https://via.placeholder.com/300x200.png?text=CAMIO+TPU+Matte",
  tphGloss: "https://via.placeholder.com/300x200.png?text=CAMIO+TPH+Gloss",
};

const services = [
  {
    title: "Single Feature MVP",
    description:
      "Skip the risk and jumpstart your vision. Our single-feature MVPs let you test concepts fast and affordably before going all in.",
    image: "https://placehold.co/150x100",
    alt: "Person presenting a digital dashboard on a tablet",
  },
  {
    title: "Pilot MVP Development",
    description:
      "Stop wasting time on features nobody wants. Our pilot MVP development solution helps you launch fast and iterate smart.",
    image: "https://placehold.co/150x100",
    alt: "Illustration of a person riding a rocket",
  },
  {
    title: "MVP Web Development",
    description:
      "Test your idea without the risk - we offer basic sites for a fraction of the cost.",
    image: "https://placehold.co/150x100",
    alt: "Person working on a futuristic digital interface",
  },
  {
    title: "Clickable Prototype",
    description:
      "Live and breathe your web and app concepts. We craft clickable prototypes that you can test and tweak before going live.",
    image: "https://placehold.co/150x100",
    alt: "People discussing a prototype on a computer screen",
  },
  {
    title: "Complete MVP Development",
    description:
      "To help you show your product to users or stakeholders, we develop the basic version with all the key features!",
    image: "https://placehold.co/150x100",
    alt: "Person working on a laptop with a development diagram on the screen",
  },
  {
    title: "MVP Consultation",
    description:
      "From validating your idea to prioritizing key features, we'll be your trusted partner in building your MVP.",
    image: "https://placehold.co/150x100",
    alt: "Computer screen showing a process diagram",
  },
];

const Products = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-600 mb-4">
          Top Picks for <span className=" relative bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
            Premium Protection
            <Image src={underline} className="absolute w-full left-0" />
            </span>
        </h2>
        <h3 className="text-xl text-gray-600 mb-10 py-10">
          Explore our best-selling CAMIO PPF products, trusted for their
          unmatched protection and flawless finish.
        </h3>

        <div className=" p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start justify-start space-x-4">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-36 h-24 object-cover"
                />
                <div className="text-left">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;