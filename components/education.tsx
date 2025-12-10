"use client"

import { Award, BookOpen, Shield, Cloud, GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Harare Institute of Technology",
      degree: "BScTech Honours Degree in Software Engineering",
      status: "In Progress",
      icon: GraduationCap,
    },
    {
      institution: "Zengeza High One School",
      degree: "ZGCE Advanced Level & Ordinary Level",
      status: "Completed",
      icon: BookOpen,
    },
  ]

  const certifications = [
    {
      name: "Aviatrix Multi-Cloud Network Professional",
      status: "Recently Obtained",
      icon: Cloud,
      highlight: true,
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      status: "Completed",
      icon: Cloud,
    },
    {
      name: "CompTIA Security+ (In progress)",
      status: "In Progress",
      icon: Shield,
    },
    {
      name: "CompTIA Network+ A+ (In progress)",
      status: "In Progress",
      icon: Shield,
    },
    {
      name: "Cisco: Introduction to Cybersecurity",
      status: "Completed",
      icon: Shield,
    },
    {
      name: "Cisco: Data Analytics Essentials",
      status: "Completed",
      icon: Award,
    },
    {
      name: "ISC2: Cybersecurity Candidate",
      status: "Candidate",
      icon: Shield,
    },
  ]

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-5xl font-bold">
            <span className="text-accent">Education</span> & Certifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <div
                key={index}
                className="bg-card border border-border hover:border-accent/30 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent group-hover:text-accent/90 transition-colors mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-foreground font-medium mb-2">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground font-medium">{edu.status}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div
                  key={index}
                  className={`border rounded-xl p-5 transition-all duration-300 group cursor-default ${
                    cert.highlight
                      ? "bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 border-accent/50 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                      : "bg-card border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${cert.highlight ? "bg-accent/30" : "bg-accent/10"} group-hover:bg-accent/20 transition-colors`}
                    >
                      <IconComponent size={20} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-bold leading-tight ${cert.highlight ? "text-accent" : "text-foreground"}`}
                      >
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">{cert.status}</p>
                      {cert.highlight && (
                        <div className="mt-3 inline-block">
                          <span className="text-xs font-semibold text-accent bg-accent/20 px-2.5 py-1 rounded-full">
                            ✓ Newly Certified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
