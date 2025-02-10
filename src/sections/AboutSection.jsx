import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CheckCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white px-8 py-16">
      <div className="text-left mb-16">
        <span className="text-sm text-gray-600">About Me</span>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
          Who Am I?
        </h2>
      </div>

      <div className="max-w-[1100px] text-lg text-gray-600 mb-12 mx-auto">
        <p>
          <strong>Hi, I am Kulcsár Zsolt</strong> - a passionate Full Stack
          Developer with expertise in building scalable web applications. I
          specialize in creating seamless user experiences with React on the
          front-end and powerful back-end solutions with .NET.
        </p>
        <p className="mt-6">
          My goal is to create applications that are not only functional but
          also intuitive and engaging. I enjoy solving complex problems and
          continuously improving my skills in both front-end and back-end
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-[1100px] mx-auto">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <CodeIcon className="w-12 h-12 text-blue-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Frontend Development (React)
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Creating dynamic, responsive, and engaging user interfaces using
            React.js, leveraging the power of React Hooks, JSX, and Redux for
            state management.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <ServerIcon className="w-12 h-12 text-green-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Backend Development (.NET)
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Building robust, scalable APIs and server-side applications using
            .NET Core, with an emphasis on clean architecture and best practices
            for maintainability.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <DatabaseIcon className="w-12 h-12 text-red-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Database Management
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Working with SQL and NoSQL databases, designing efficient schemas,
            optimizing queries, and ensuring data integrity for high-performance
            applications.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <DocumentTextIcon className="w-12 h-12 text-teal-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            API Integration
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Building and integrating RESTful APIs and third-party services to
            enhance the functionality of web applications, ensuring seamless
            communication across systems.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <CloudIcon className="w-12 h-12 text-orange-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Cloud Solutions
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Deploying web applications on cloud platforms like AWS, Azure, and
            Google Cloud, ensuring scalability, security, and high availability.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <CheckCircleIcon className="w-12 h-12 text-yellow-600 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Testing & Debugging
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Ensuring application quality through unit testing, integration
            testing, and debugging using tools like Jest, Mocha, and the .NET
            testing framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
