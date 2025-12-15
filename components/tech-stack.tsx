"use client"

import { Server, Shield, Cloud, Code, Network, Wifi } from "lucide-react"

export default function TechStack() {
  const technologies = [
    { name: "Splunk", icon: Server, category: "Monitoring" },
    { name: "ServiceNow", icon: Code, category: "ITSM" },
    { name: "Axiros", icon: Network, category: "Management" },
    { name: "PRISM", icon: Wifi, category: "Network" },
    { name: "Aviatrix", icon: Cloud, category: "Multi-Cloud" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Cisco", icon: Network, category: "Networking" },
    { name: "Security+", icon: Shield, category: "Security" },
  ]

  return (
    <section className="py-16 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8 font-semibold">
          Technologies & Tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 group-hover:border-accent/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold group-hover:text-accent transition-colors">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
