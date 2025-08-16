import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ResearchSection from "@/components/research-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import HonorsSection from "@/components/honors-section"

import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <EducationSection />
      <SkillsSection />
      <HonorsSection />
      <ContactSection />
    </main>
  )
}
