import { useState } from "react";
import Layout from "../components/Layout";
import useActiveSection from "../hooks/useActiveSection";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection}>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
