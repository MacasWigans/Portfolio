"use client"

import { Award, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Certifications() {
  const certifications = [
    {
      name: "Aviatrix Multi-Cloud Network Professional",
      issuer: "Aviatrix",
      date: "2024",
      status: "Active",
      highlight: true,
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Valid",
      status: "Active",
      highlight: false,
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "In Progress",
      status: "In Progress",
      highlight: false,
    },
    {
      name: "Cisco CCNA",
      issuer: "Cisco",
      date: "Valid",
      status: "Active",
      highlight: false,
    },
  ]

  return (
    <section id="certifications" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Credentials</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Professional Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Industry-recognized certifications validating expertise in cybersecurity, networking, and cloud
            infrastructure.
          </p>
        </div>

        {/* Certifications Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`relative p-6 md:p-8 md:ml-20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 ${
                  cert.highlight
                    ? "bg-gradient-to-r from-accent/10 to-accent/5 border-accent/50"
                    : "bg-card border-border/50 hover:border-accent/30"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute -left-20 top-8 items-center justify-center w-16 h-16 rounded-full bg-accent/20 border-4 border-background">
                  <Award className={`w-7 h-7 ${cert.highlight ? "text-accent" : "text-accent/70"}`} />
                </div>

                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold">{cert.name}</h3>
                      {cert.highlight && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse">
                          NEWLY CERTIFIED
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-accent font-medium">{cert.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className={`w-6 h-6 ${cert.status === "Active" ? "text-green-500" : "text-yellow-500"}`}
                    />
                    <span
                      className={`text-sm font-medium ${cert.status === "Active" ? "text-green-500" : "text-yellow-500"}`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
