"use client"

import { useEffect, useState } from "react"
import { Shield, Users, Award, Clock } from "lucide-react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    {
      icon: Shield,
      value: "500+",
      label: "Tickets Resolved",
      description: "Technical support issues handled",
    },
    {
      icon: Users,
      value: "99%",
      label: "SLA Compliance",
      description: "Service level agreement achievement",
    },
    {
      icon: Award,
      value: "5+",
      label: "Certifications",
      description: "Industry-recognized credentials",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Experience",
      description: "Round-the-clock operations",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
