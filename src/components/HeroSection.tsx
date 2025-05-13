import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 md:px-8 text-center h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Transforming Today <br />
          For <br />
          <span>Digital Tomorrow</span>
        </h1>
        <p className=" text-lg md:text-xl mb-10">
          We are committed to offering state-of-the-art software solutions that <br />
          enable companies to prosper in the digital world.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          Learn More
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
