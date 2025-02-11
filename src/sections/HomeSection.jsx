const HomeSection = () => {
  return (
    <section id="home" className="flex h-screen bg-white px-8 py-16">
      <div className="flex-1 flex items-center justify-center text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Hello, I am <span className="text-blue-500">Kulcsár Zsolt</span>
          </h1>
          <h2 className="text-2xl mb-6 text-gray-600 opacity-90">
            Passionate Software Developer & Problem Solver
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 md:w-full justify-center">
            <a
              href="https://github.com/zsoltkulcsar"
              target="_blank"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 md:w-full"
            >
              View Portfolio
            </a>
            <a
              href="https://drive.google.com/file/d/1jpeWiSV63Qe1lLzMtobfN5cthdvuLeMu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 md:w-full"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
