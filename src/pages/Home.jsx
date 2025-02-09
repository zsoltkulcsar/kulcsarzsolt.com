import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F2F3F7] min-h-screen flex justify-center">
      <div className="w-full max-w-[1100px] flex min-h-screen relative">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
        />

        <div className="flex-1">
          <button
            className="md:hidden fixed top-5 left-5 z-50 p-2 bg-gray-800 text-white rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {[
            { id: "home", text: "Home", bg: "bg-gray-200" },
            { id: "about", text: "About", bg: "bg-gray-300" },
            { id: "services", text: "Services", bg: "bg-gray-400" },
            { id: "skills", text: "Skills", bg: "bg-gray-500" },
            { id: "education", text: "Education", bg: "bg-gray-600" },
            { id: "experience", text: "Experience", bg: "bg-gray-700" },
            { id: "work", text: "Work", bg: "bg-gray-800" },
            { id: "blog", text: "Blog", bg: "bg-gray-900 text-white" },
            { id: "contact", text: "Contact", bg: "bg-black text-white" },
          ].map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`${section.bg} h-screen flex flex-col items-center justify-center p-10`}
            >
              <h2 className="text-3xl font-bold text-[#4B4B4D]">
                {section.text} Section
              </h2>
              <p className="text-[#4B4B4D]">
                Welcome to the {section.text} section.
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
