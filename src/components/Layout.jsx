import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ children, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto flex items center">
      <div className="flex bg-white min-h-screen">
        <div className="w-64 h-full fixed">
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeSection={activeSection}
          />
        </div>

        <div className="md:hidden fixed top-5 left-5 z-50">
          <Navbar setIsOpen={setIsOpen} />
        </div>
        <div
          className={`flex-1 min-h-screen p-6 overflow-auto transition-all duration-300 ${
            isOpen ? "ml-0" : "ml-0 md:ml-72"
          }`}
        >
          <div className="mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Layout;
