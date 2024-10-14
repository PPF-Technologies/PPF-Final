import React from "react";



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
    <div className="bg-gradient-to-tr from-[#ecfffc] via-[#e6f2f1] to-[#d2f6f3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Top Picks for Premium Protection
        </h2>
        <h3 className="text-xl text-gray-600 mb-10">
          Explore our best-selling CAMIO PPF products, trusted for their unmatched protection and flawless finish.
        </h3>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-36 h-24 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title}</h2>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
