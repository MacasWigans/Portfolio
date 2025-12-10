"use client"

import { ArrowDown, Shield, Lock, Zap } from "lucide-react"

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="pt-32 pb-24 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-20 right-12 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float opacity-40"></div>
      <div
        className="absolute -bottom-20 left-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl opacity-30"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-2">
                  HELLO I'M
                </p>
              </div>

              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-4">
                  TADIWA LYNDON <span className="text-accent">MAKOSA</span>
                </h1>
                <p className="text-xl text-accent font-semibold tracking-wide uppercase">
                  CYBER SECURITY EXPERT
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                IT and cybersecurity specialist focused on network security, infrastructure resilience, and threat
                analysis. Certified professional with hands-on experience across telecommunications and enterprise
                environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 bg-accent/5 px-4 py-2 rounded-lg border border-accent/20">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Shield size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Network Security</span>
              </div>
              <div className="flex items-center gap-3 bg-accent/5 px-4 py-2 rounded-lg border border-accent/20">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Lock size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-3 bg-accent/5 px-4 py-2 rounded-lg border border-accent/20">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Zap size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">Cloud Infrastructure</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/5 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a
                href="https://linkedin.com/in/tadiwalyndonmakosa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:makosatadiwalyndon@gmail.com"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Email
              </a>
              <span className="text-sm font-medium text-muted-foreground">+263 781 876 263</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-2xl"></div>
            <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:border-accent/60">
              <img
                src="/images/profile.jpg"
                alt="Tadiwa Lyndon Makosa - Cybersecurity Professional"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={onGetStarted}
            className="text-muted-foreground hover:text-accent transition-colors duration-300 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}