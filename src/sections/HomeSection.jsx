const HomeSection = () => {
  return (
    <section id="home" className="flex h-screen bg-white px-8 py-16">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Hello, I am <span className="text-blue-500">Kulcsár Zsolt</span>
          </h1>
          <h2 className="text-2xl mb-6 text-gray-600 opacity-90">
            Passionate Software Developer & Problem Solver
          </h2>
          <p className="text-lg mb-8 text-gray-600 opacity-75">
            I create impactful digital solutions through code. Let`s make
            something amazing together.
          </p>

          <div className="space-x-6">
            <a
              href="#portfolio"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </a>
            <a
              href="#cv"
              className="inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
