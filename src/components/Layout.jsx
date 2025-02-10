import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ children, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto flex">
      <div className="md:hidden fixed top-5 left-5 z-50">
        <Navbar setIsOpen={setIsOpen} />
      </div>

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection={activeSection}
      />

      <div
        className={`flex-1 min-h-screen p-6 overflow-auto transition-all duration-300 ${
          isOpen ? "ml-0" : "ml-0 md:ml-72"
        }`}
      >
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Layout;
