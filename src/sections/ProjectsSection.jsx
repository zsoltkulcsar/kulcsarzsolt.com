import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import financeImage from "./assets/images/finance.png";
import pinterioImage from "./assets/images/pinterio.png";
import shop from "./assets/images/shop.png";
import togglTrack from "./assets/images/togglTrack.png";

const projects = [
  {
    title: " Cloud-Native E-Commerce Solution",
    description:
      "This project was based on cloud-native microservices architecture, mainly for educational purposes. This project was also beneficial for practicing diferrent architectures like Domain-Driven-Design and Clean Architecture, following SOLID and Clean code principles.",
    tech: ["ASP.NET", "gRPC", "MediatR", "Docker", "RabbitMQ, Redis, Yarp"],
    github: "",
    external: "",
    preview: shop,
  },
  {
    title: "Printerio",
    description: "A short description of project two.",
    tech: ["Vue", "Tailwind", "Express"],
    github: "",
    external: "",
    preview: pinterioImage,
  },
  {
    title: "Personal Finance Management System",
    description:
      "This project focuses on building scalable, resilient microservices using .NET and AWS, incorporating key patterns like CQRS, Service Discovery, and Event Sourcing. It covers various architectures, including serverless and containerized microservices, and includes hands-on experience with Docker, RabbitMQ, and Apache Kafka.",
    tech: [
      "ASP.NET 8",
      "AWS Cognito",
      "AWS ECS (Fargate & EC2)",
      "Docker",
      "RabbitMQ",
      "Apache Kafka",
      "Event Bus",
      "AWS CloudMap",
    ],
    github: "",
    external: "",
    preview: financeImage,
  },
  {
    title: "TooglTrack Clone",
    description:
      "I started to use Toogle Track. I find it usefull but it lacks some good features, and a huge chunk is pay-to-win. So I decided that I develop my own version that I can tailor to my preferences.",
    tech: ["React", ".Net", "GraphQL"],
    github: "",
    external: "",
    preview: togglTrack,
  },
];

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const GRID_LIMIT = 3;
  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  return (
    <section className="bg-white py-10">
      <div className="text-left mb-16">
        <span className="text-sm text-gray-600">Other Activities</span>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
          Personal Projects
        </h2>
      </div>

      <div className="space-y-8">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start space-x-4">
              <div className="sm:w-1/3 h-auto flex-shrink-0">
                {project.preview && (
                  <img
                    src={project.preview}
                    alt={`${project.title} Preview`}
                    className="w-full h-auto object-cover rounded-lg mt-5 mb-5"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold mt-5">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-black"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-black"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mt-3 text-justify">
                  {project.description}
                </p>
                <div className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Show {showMore ? "Less" : "More"}
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
