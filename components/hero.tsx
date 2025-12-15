"use client"

import { ArrowDown, Shield, Lock, Zap, Download } from "lucide-react"
import CodingTerminal from "./coding-terminal"

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-10 right-12 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float opacity-40"></div>
      <div
        className="absolute -bottom-20 left-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl opacity-30"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-block">
                <p className="text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase mb-2">HELLO I'M</p>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance text-foreground">
                  Tadiwa Lyndon <span className="text-accent block sm:inline">Makosa</span>
                </h1>
                <p className="text-lg sm:text-xl mt-3 text-accent font-semibold tracking-wide uppercase">
                  CYBER SECURITY EXPERT
                </p>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                IT and cybersecurity specialist focused on network security, infrastructure resilience, and threat
                analysis. Certified professional with hands-on experience across telecommunications and enterprise
                environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:gap-4 pt-2">
              <div className="flex items-center gap-2 lg:gap-3 bg-accent/5 px-3 py-2 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="p-1.5 lg:p-2 rounded-lg bg-accent/10">
                  <Shield size={18} className="text-accent lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-foreground">Network Security</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 bg-accent/5 px-3 py-2 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="p-1.5 lg:p-2 rounded-lg bg-accent/10">
                  <Lock size={18} className="text-accent lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-foreground">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 bg-accent/5 px-3 py-2 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="p-1.5 lg:p-2 rounded-lg bg-accent/10">
                  <Zap size={18} className="text-accent lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-foreground">Cloud Infrastructure</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6">
              <button
                onClick={onGetStarted}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-0.5 text-sm lg:text-base"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/5 transition-all duration-300 text-center text-sm lg:text-base"
              >
                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-border text-foreground rounded-lg font-semibold hover:border-accent hover:text-accent transition-all duration-300 text-center text-sm lg:text-base"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8">
              <a
                href="https://linkedin.com/in/tadiwalyndonmakosa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:makosatadiwalyndon@gmail.com"
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Email
              </a>
              <span className="text-xs lg:text-sm font-medium text-muted-foreground">+263 781 876 263</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:border-accent/60 hover:scale-[1.02]">
                <img
                  src="/images/profile.jpg"
                  alt="Tadiwa Lyndon Makosa - Cybersecurity Professional"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full max-w-sm mx-auto lg:max-w-none">
              <CodingTerminal />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-20">
          <button
            onClick={onGetStarted}
            className="text-muted-foreground hover:text-accent transition-colors duration-300 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={28} className="lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}
