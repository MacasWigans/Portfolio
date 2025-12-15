"use client"

import { ExternalLink, Shield, Lock, Cloud, Network } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Network Security Implementation",
      description:
        "Designed and deployed comprehensive network security infrastructure for enterprise environment with 500+ endpoints. Implemented firewall policies, VLANs, and intrusion detection systems.",
      tech: ["Cisco", "Firewalls", "VLANs", "IDS/IPS"],
      icon: Shield,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Multi-Cloud Infrastructure Migration",
      description:
        "Led migration of on-premise infrastructure to hybrid multi-cloud environment using Aviatrix. Reduced operational costs by 40% while improving system resilience and uptime.",
      tech: ["Aviatrix", "AWS", "Azure", "Terraform"],
      icon: Cloud,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Zero Trust Security Framework",
      description:
        "Implemented zero trust security architecture for telecommunications provider. Established identity-based access controls and continuous authentication protocols.",
      tech: ["Zero Trust", "IAM", "MFA", "SIEM"],
      icon: Lock,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Network Monitoring & Automation",
      description:
        "Developed automated network monitoring solution using Python and Splunk. Reduced incident response time by 60% through proactive alerting and automated remediation.",
      tech: ["Python", "Splunk", "Automation", "APIs"],
      icon: Network,
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Real-world cybersecurity and infrastructure projects demonstrating technical expertise and problem-solving
            abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group relative p-8 bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 border-border/50 hover:border-accent/50 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors text-balance">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
