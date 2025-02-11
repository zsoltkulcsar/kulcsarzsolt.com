import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CheckCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";
import Card from "./components/Card";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16 max-w-[1100px] mx-auto">
        <Card
          Icon={CodeIcon}
          title="Frontend Development (React)"
          description="Creating dynamic, responsive, and engaging user interfaces using React.js, leveraging the power of React Hooks, JSX, and Redux for state management."
          iconColor="blue-600"
          bgColor="gray-100"
        />
        <Card
          Icon={ServerIcon}
          title="Backend Development (.NET)"
          description="Building robust, scalable APIs and server-side applications using .NET Core, with an emphasis on clean architecture and best practices for maintainability."
          iconColor="green-600"
          bgColor="gray-100"
        />
        <Card
          Icon={DatabaseIcon}
          title="Database Management"
          description="Working with SQL and NoSQL databases, designing efficient schemas, optimizing queries, and ensuring data integrity for high-performance applications."
          iconColor="red-600"
          bgColor="gray-100"
        />
        <Card
          Icon={DocumentTextIcon}
          title="API Integration"
          description="Building and integrating RESTful APIs and third-party services to enhance the functionality of web applications, ensuring seamless communication across systems."
          iconColor="teal-600"
          bgColor="gray-100"
        />
        <Card
          Icon={CloudIcon}
          title="Cloud Solutions"
          description="Deploying web applications on cloud platforms like AWS, Azure, and Google Cloud, ensuring scalability, security, and high availability."
          iconColor="orange-600"
          bgColor="gray-100"
        />
        <Card
          Icon={CheckCircleIcon}
          title="Testing & Debugging"
          description="Ensuring application quality through unit testing, integration testing, and debugging using tools like Jest, Mocha, and the .NET testing framework."
          iconColor="yellow-600"
          bgColor="gray-100"
        />
      </div>
    </section>
  );
};

export default AboutSection;
