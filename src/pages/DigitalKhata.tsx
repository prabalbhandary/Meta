import { useEffect, useState } from "react"
import dcashout from "../assets/dcashout.svg"
import ddashboard from "../assets/ddashboard.svg"
import dtask from "../assets/dtask.svg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const DigitalKhata = () => {
    const images = [dcashout, ddashboard, dtask];
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
            Where Finances unify for business and personal success
          </p>
        </div>

        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Features</h2>
          <b className="block text-lg mb-4">
            Powerful POS system
          </b>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed">
            <li>Efficient personal finance management</li>
            <li>
              Accurate interest calculator
            </li>
            <li>Timely reminders and alerts</li>
            <li>Streamlined record-keeping</li>
            <li>Robust data security and many more</li>
          </ol>
          <div className="mt-6">
            <Link
              to="/digitalkhata"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalKhata