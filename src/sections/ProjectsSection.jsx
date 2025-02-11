import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import specific icons

const projects = [
  {
    title: "Project One",
    description: "A short description of project one.",
    tech: ["React", "Tailwind", "Node.js"],
    github: "https://github.com/username/project1",
    external: "https://project1.com",
    preview: "asd", // Preview image or URL
  },
  {
    title: "Project Two",
    description: "A short description of project two.",
    tech: ["Vue", "Tailwind", "Express"],
    github: "https://github.com/username/project2",
    external: "https://project2.com",
    preview: "sad", // Preview image or URL
  },
  {
    title: "Project Three",
    description: "A short description of project three.",
    tech: ["Angular", "Tailwind", "Firebase"],
    github: "https://github.com/username/project3",
    external: "https://project3.com",
    preview: "sad", // Preview image or URL
  },
  {
    title: "Project Four",
    description: "A short description of project four.",
    tech: ["Svelte", "Tailwind", "GraphQL"],
    github: "https://github.com/username/project4",
    external: "https://project4.com",
    preview: "https://via.placeholder.com/150", // Preview image or URL
  },
  {
    title: "Project Five",
    description: "A short description of project five.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    github: "https://github.com/username/project5",
    external: "https://project5.com",
    preview: "https://via.placeholder.com/150", // Preview image or URL
  },
  {
    title: "Project Six",
    description: "A short description of project six.",
    tech: ["React", "Tailwind", "MySQL"],
    github: "https://github.com/username/project6",
    external: "https://project6.com",
    preview: "https://via.placeholder.com/150", // Preview image or URL
  },
];

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const GRID_LIMIT = 3;
  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-4xl font-extrabold text-center mb-10">Projects</h2>

      <div className="space-y-8">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start space-x-4">
              <div className="sm:w-1/3 h-auto flex-shrink-0">
                {/* Preview Image with 30% size */}
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
                {/* Description */}
                <p className="text-gray-700 mt-3">{project.description}</p>
                {/* Tech Stack */}
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

      {/* Show More Button */}
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
