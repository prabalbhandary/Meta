const SecondSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Design, Build And Scale Your <br className="hidden md:block" /> Vision
          With Us
        </h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
        <div className="space-y-2">
          <span className="text-xl font-semibold text-indigo-600">
            1. Ideate
          </span>
          <p>
            Let's brainstorm together and explore creative ideas to solve your
            unique challenges.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-xl font-semibold text-indigo-600">
            2. Design
          </span>
          <p>
            Our skilled designers will craft visually stunning and intuitive
            user interfaces that enhance the user experience.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-xl font-semibold text-indigo-600">
            3. Develop
          </span>
          <p>
            Our expert developers will turn your approved design into a robust
            and scalable software solution.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-xl font-semibold text-indigo-600">
            4. Launch
          </span>
          <p>
            We'll meticulously prepare for a successful launch, ensuring a
            smooth transition from development to deployment.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-xl font-semibold text-indigo-600">
            5. Scale
          </span>
          <p>
            As your business grows, we'll work with you to scale your software
            and accommodate increasing demands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
