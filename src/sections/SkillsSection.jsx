import {
  CodeIcon,
  DesktopComputerIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CloudDownloadIcon,
} from "@heroicons/react/outline";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C#", icon: <CodeIcon className="w-6 h-6" />, level: 90 },
      { name: "JavaScript", icon: <CodeIcon className="w-6 h-6" />, level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: ".NET",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 85,
      },
      {
        name: "React",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 75,
      },

      {
        name: "MediatR",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 70,
      },
      {
        name: "Fluent Validation",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 70,
      },
      {
        name: "Marten",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 65,
      },
      {
        name: "MassTransit",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 75,
      },
      {
        name: "YARP Reverse Proxy",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 60,
      },
      {
        name: "Mapster",
        icon: <DesktopComputerIcon className="w-6 h-6" />,
        level: 60,
      },
    ],
  },

  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", icon: <ServerIcon className="w-6 h-6" />, level: 85 },
      { name: "CSS", icon: <ServerIcon className="w-6 h-6" />, level: 85 },
      {
        name: "Tailwind CSS",
        icon: <ServerIcon className="w-6 h-6" />,
        level: 80,
      },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Agile", icon: <CloudIcon className="w-6 h-6" />, level: 80 },
      {
        name: "Docker",
        icon: <CloudDownloadIcon className="w-6 h-6" />,
        level: 85,
      },

      { name: "AWS", icon: <CloudIcon className="w-6 h-6" />, level: 45 },
      { name: "Azure", icon: <CloudIcon className="w-6 h-6" />, level: 65 },
      { name: "RabbitMQ", icon: <CloudIcon className="w-6 h-6" />, level: 55 },
      {
        name: "Apache Kafka",
        icon: <CloudIcon className="w-6 h-6" />,
        level: 35,
      },
    ],
  },
  {
    category: "Databases & Management",
    skills: [
      { name: "SQL", icon: <DatabaseIcon className="w-6 h-6" />, level: 85 },
      {
        name: "Entity Framework Core",
        icon: <DatabaseIcon className="w-6 h-6" />,
        level: 80,
      },
    ],
  },
  {
    category: "Microservices & Architecture",
    skills: [
      { name: "CQRS", icon: <ServerIcon className="w-6 h-6" />, level: 80 },
      { name: "DDD", icon: <ServerIcon className="w-6 h-6" />, level: 75 },
      {
        name: "Event Sourcing",
        icon: <ServerIcon className="w-6 h-6" />,
        level: 65,
      },
      { name: "Redis", icon: <ServerIcon className="w-6 h-6" />, level: 65 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <span className="text-sm text-gray-600">MY SPECIALTY</span>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
            MY SKILLS{" "}
          </h2>
        </div>

        <div className="space-y-8">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                  >
                    <div className="flex justify-center mb-2">{skill.icon}</div>
                    <h4 className="text-lg text-center font-medium text-gray-800 dark:text-white">
                      {skill.name}
                    </h4>

                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
