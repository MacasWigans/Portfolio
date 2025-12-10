"use client"

import { useState } from "react"
import { Shield, Network, Wrench, Users, Lock, Server, CheckCircle2 } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity & Risk",
      icon: Shield,
      skills: [
        "Security Audits",
        "Risk Assessment",
        "Compliance Checks",
        "Cybersecurity Investigation",
        "Threat Analysis",
      ],
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-200 dark:border-red-900/50",
      hoverBorder: "hover:border-red-400/50",
    },
    {
      title: "Network Administration",
      icon: Network,
      skills: ["IPv4/IPv6", "VLANs", "TCP/IP", "GPON", "MPLS", "LTE", "WLAN", "Wi-Fi Configuration"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-200 dark:border-blue-900/50",
      hoverBorder: "hover:border-blue-400/50",
    },
    {
      title: "Infrastructure & Tools",
      icon: Server,
      skills: ["ServiceNow", "Microsoft Office 365", "Active Directory", "Splunk", "Axiros", "PRISM"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-200 dark:border-purple-900/50",
      hoverBorder: "hover:border-purple-400/50",
    },
    {
      title: "Technical Support",
      icon: Wrench,
      skills: ["Tier 1 & Tier 2 Support", "Remote Desktop Support", "Troubleshooting", "System Maintenance"],
      gradient: "from-yellow-500/20 to-green-500/20",
      borderColor: "border-yellow-200 dark:border-yellow-900/50",
      hoverBorder: "hover:border-yellow-400/50",
    },
    {
      title: "Cloud & Security Certifications",
      icon: Lock,
      skills: [
        "AWS Cloud Practitioner",
        "CompTIA Security+",
        "CompTIA Network+",
        "Cisco Cybersecurity",
        "ISC2 Candidate",
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-200 dark:border-indigo-900/50",
      hoverBorder: "hover:border-indigo-400/50",
    },
    {
      title: "Professional & Soft Skills",
      icon: Users,
      skills: [
        "Client Relations",
        "SLA Management",
        "Conflict Resolution",
        "Cross-functional Collaboration",
        "Technical Documentation",
      ],
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-200 dark:border-green-900/50",
      hoverBorder: "hover:border-green-400/50",
    },
  ]

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-5xl font-bold">
            <span className="text-accent">Core</span> Competencies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.gradient} border-2 ${category.borderColor} ${category.hoverBorder} rounded-xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer group`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-foreground text-sm flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-accent/70 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
