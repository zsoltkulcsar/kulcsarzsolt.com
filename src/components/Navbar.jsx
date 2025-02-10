import PropTypes from "prop-types";

const Navbar = ({ setIsOpen }) => {
  return (
    <button
      className="md:hidden p-2 bg-blue-500 text-white rounded-md shadow-lg"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      ☰
    </button>
  );
};

Navbar.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Navbar;
