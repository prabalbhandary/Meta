import { useState } from "react";
import Banshwali from "../pages/Banshwali";
import DigitalKhata from "../pages/DigitalKhata";

const ExploreProducts = () => {
  const [tab, setTab] = useState("banshwali");

  return (
    <section className="py-16 px-4 md:px-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Products
        </h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setTab("banshwali")}
            className={`px-6 py-2 rounded-md font-medium text-sm md:text-base transition cursor-pointer ${
              tab === "banshwali"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            Banshwali
          </button>
          <button
            onClick={() => setTab("digitalKhata")}
            className={`px-6 py-2 rounded-md font-medium text-sm md:text-base transition cursor-pointer ${
              tab === "digitalKhata"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            Digital Khata
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {tab === "banshwali" && <Banshwali />}
        {tab === "digitalKhata" && <DigitalKhata />}
      </div>
    </section>
  );
};

export default ExploreProducts;
