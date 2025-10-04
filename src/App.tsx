import { useEffect } from "react";
import { portfolioData } from "@/components/data";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import FooterSection from "@/components/portfolio/FooterSection";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={portfolioData.personal_info} />
      <AboutSection summary={portfolioData.professional_summary} />
      <SkillsSection skills={portfolioData.technical_skills} />
      <ExperienceSection experiences={portfolioData.work_experience} />
      <ProjectsSection projects={portfolioData.portfolio_projects} />
      <EducationSection education={portfolioData.education} />
      <FooterSection data={portfolioData.personal_info} />
    </div>
  );
}
