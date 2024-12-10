// import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
