import { VerticalTimelineElement } from "react-vertical-timeline-component"; // <-- Add this import
import PropTypes from "prop-types";

const ExperienceItem = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="bg-red"
      date={experience.time}
      iconStyle={{
        background: experience.iconColor,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
      icon={<div className="w-12 h-12">{experience.icon}</div>}
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
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperienceItem;
