import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Add the timeline styles

import { FaLaptopCode, FaBriefcase, FaBlog } from "react-icons/fa";

const experienceData = [
  {
    title: "Project Leader",
    company: "Pulse Blog",
    description: [
      "Started working on a blog to assist the Hungarian Youth Community in Romania, focusing on providing resources in Hungarian.",
      "Leading a team of a few people to make the project successful while enhancing my management skills.",
    ],
    time: "2024 August – Present",
    icon: <FaBlog />,
    iconColor: "#006064",
  },
  {
    title: ".NET Software Developer",
    company: "IT Perspectives",
    description: [
      "Actively participated in an agile development environment, contributing to sprint planning, daily stand-ups, retrospectives, and sprint reviews.",
      "Played a pivotal role in migration of a legacy system to .NET Core,implementing MediatR and CQRS, resulting increase in maintainability and performance.",
      "Contributed in architectural and technology selection for a new project. Led efforts in user management, unit testing, enhancing security measure with AlwaysEncrypted, strengthening data integrity and confidentiality.",
      " Gained hands-on experience with frontend development, working mostly with React but some other technologies as well.",
    ],
    time: "Aug 2022 – Feb 2025",
    icon: <FaBriefcase />,
    iconColor: "#dd2c00",
  },
  {
    title: "Intern",
    company: "It Perspectives",
    description: [
      "During this time, I implemented the back-end of a library management system using .NET and MVC.",
      "Gained insights into various development processes, completing courses on development, working with a great mentor to adapt to a professional context",
    ],
    time: "Jun 2022 – Aug 2022",
    icon: <FaLaptopCode />,
    iconColor: "#304ffe",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white px-8 py-16">
      <div className="text-left mb-16">
        <span className="text-sm text-gray-600">Working Experience</span>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
          Experience
        </h2>
      </div>
      <div>
        <VerticalTimeline className="relative z-10">
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.time}
              iconStyle={{
                background: experience.iconColor,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                zIndex: 1,
              }}
              icon={<div className=" w-12 h-12">{experience.icon}</div>}
              contentStyle={{
                zIndex: 1,
              }}
            >
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {experience.title}
                </h3>
                <p className="text-lg text-gray-600">{experience.company}</p>
              </div>

              <ul className="text-sm text-gray-600 list-disc pl-5 mt-2">
                {experience.description.map((line, idx) => (
                  <li key={idx} className="mb-2">
                    {line}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
