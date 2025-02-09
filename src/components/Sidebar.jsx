import aboutPhoto from "../assets/images/about.jpg";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, setIsOpen, activeSection }) => {
  return (
    <div
      className={`bg-gray-900 text-white p-5 h-screen w-64 fixed left-0 top-0 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <button
        className="md:hidden absolute top-5 right-5 text-white text-xl"
        onClick={() => setIsOpen(false)}
      >
        ✖
      </button>

      <div className="text-center">
        <img
          src={aboutPhoto}
          alt="About"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h1 className="mt-4 text-xl font-bold">Kulcsár Zsolt</h1>
        <span className="text-sm text-gray-400">.NET Developer</span>
      </div>

      <nav className="mt-6 flex flex-col items-center">
        <ul className="space-y-4">
          {[
            "home",
            "about",
            "services",
            "skills",
            "education",
            "experience",
            "work",
            "blog",
            "contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`text-lg block relative transition-colors duration-200
                  ${
                    activeSection === item
                      ? "text-blue-400 after:block after:absolute after:left-0 after:right-0 after:bottom-[-5px] after:h-[2px] after:bg-blue-400"
                      : "text-white hover:text-gray-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Sidebar;
