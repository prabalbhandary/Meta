import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Mobile Development",
    defaultText: "Apps for Android & iOS platforms.",
    flippedText: "Custom mobile apps that scale.",
  },
  {
    title: "UI/UX",
    defaultText: "Designs that speak your brand.",
    flippedText: "Crafting user-first experiences.",
  },
  {
    title: "Brand & Marketing",
    defaultText: "Strategies that drive growth.",
    flippedText: "Boost visibility and loyalty.",
  },
  {
    title: "Web Development",
    defaultText: "Robust & responsive websites.",
    flippedText: "Full-stack web solutions.",
  },
  {
    title: "Internship/ Training",
    defaultText: "Learn & grow with experts.",
    flippedText: "Practical learning experience.",
  },
];

const OurServices = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl shadow-lg p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative w-full h-48 perspective ${
                  index === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                <div
                  className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  <div className="absolute w-full h-full backface-hidden bg-white/20 rounded-lg flex flex-col items-center justify-center text-center p-4 hover:bg-white/30 transition font-semibold">
                    <h3>{service.title}</h3>
                    <p className="text-sm mt-2">{service.defaultText}</p>
                  </div>

                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/30 rounded-lg flex flex-col items-center justify-center text-center p-4">
                    <h3>{service.title}</h3>
                    <p className="text-sm mt-2">{service.flippedText}</p>
                    <Link to="/contact" className="mt-3 underline text-white">
                      More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-gray-800">
          <b className="text-sm text-green-600 uppercase tracking-wider">
            Our Service
          </b>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2 mb-4">
            Empowering <br />
            Your Vision
          </h1>
          <p className="text-base md:text-lg mb-6">
            Our range of offerings is carefully curated to cater to your diverse
            needs, ensuring that your digital journey is seamless, captivating,
            and results-driven.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center text-green-600 font-semibold hover:underline hover:text-green-700 transition"
          >
            Learn More
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
