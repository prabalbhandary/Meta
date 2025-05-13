import { useState, useEffect } from 'react';
import bchart from '../assets/bchart.svg';
import bcontribution from '../assets/bcontribution.svg';
import bidcard from '../assets/bidcard.svg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banshwali = () => {
  const images = [bchart, bcontribution, bidcard];
  const [imgSlide, setImgSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-green-100 rounded-xl p-6 shadow-md text-center">
          <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg mb-4">
            <img
              src={images[imgSlide]}
              alt="Banshwali Visual"
              className="max-h-64 w-auto object-contain transition duration-700 ease-in-out"
            />
          </div>
          <p className="text-lg text-gray-800">
            Trace the footsteps of your ancestors and discover your family tree's story.
          </p>
        </div>

        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Features</h2>
          <b className="block text-lg mb-4">
            View full Banshawali chart digitally.
          </b>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed">
            <li>View your Banshaj information all in one place.</li>
            <li>
              Bring all generations together under one roof to create a unique opportunity for shared experiences, mutual learning, and the strengthening of family bonds.
            </li>
            <li>Manage and learn about events nearby you.</li>
          </ol>
          <div className="mt-6">
            <Link
              to="/banshwali"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banshwali;
