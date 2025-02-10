import PropTypes from "prop-types";

const Sidebar = ({ isOpen, setIsOpen, activeSection }) => {
  return (
    <div
      className={`bg-gray-900 text-white p-6 min-h-screen fixed inset-y-0 left-0 transition-transform duration-300 z-50 
      ${isOpen ? "translate-x-0 w-full" : "-translate-x-full w-72"}  
      md:w-72 md:translate-x-0 md:relative md:flex md:flex-col`}
    >
      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden text-white text-2xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      {/* Profile Info */}
      <div className="text-center mb-6">
        <div
          className="w-24 h-24 mx-auto rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('/your-photo.jpg')` }}
        />
        <h1 className="mt-4 text-xl font-semibold">Kulcsár Zsolt</h1>
        <span className="text-sm text-gray-400">.NET Developer</span>
      </div>

      {/* Navigation */}
      <nav className="items-center">
        <ul className="space-y-4">
          {[
            "home",
            "about",
            "skills",
            "education",
            "experience",
            "projects",
            "contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`block px-4 py-2 rounded-lg transition duration-300 
                  ${
                    activeSection === item
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">
            FB
          </a>
          <a href="#" className="hover:text-blue-400">
            TW
          </a>
          <a href="#" className="hover:text-blue-400">
            IG
          </a>
          <a href="#" className="hover:text-blue-400">
            LN
          </a>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Sidebar;
