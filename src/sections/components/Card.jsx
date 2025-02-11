import { PropTypes } from "prop-types";

const Card = ({ Icon, title, description, iconColor, bgColor }) => {
  return (
    <div
      className={`bg-${bgColor} p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <div className="mb-4">
        <Icon className={`w-12 h-12 text-${iconColor} mx-auto`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
    </div>
  );
};

Card.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Card;
