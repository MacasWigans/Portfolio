"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Stats from "@/components/stats"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import TechStack from "@/components/tech-stack"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onMenuClick={scrollToSection} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero onGetStarted={() => scrollToSection("stats")} />
      <Stats />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
