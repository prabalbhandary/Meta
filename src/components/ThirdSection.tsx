const ThirdSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 md:px-12 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Why MetaLogic<span className="text-red-500">?</span>
      </h1>
      <p className="max-w-2xl mx-auto mb-12 text-lg">
        Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.
      </p>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <li className="bg-white text-blue-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Innovation at the Core</h2>
          <p>We thrive on innovation and continuously explore the latest technologies to provide you with groundbreaking solutions that keep you ahead of the curve.</p>
        </li>
        <li className="bg-white text-blue-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Collaboration is the Key</h2>
          <p>We work closely with you to understand your goals, challenges, and aspirations, ensuring our solutions align perfectly with your business objectives.</p>
        </li>
        <li className="bg-white text-blue-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Your Success, Our Purpose</h2>
          <p>Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving you a competitive edge in your industry.</p>
        </li>
      </ul>
    </section>
  );
};

export default ThirdSection;
