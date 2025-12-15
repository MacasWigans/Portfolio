"use client"

import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Tadiwa consistently demonstrated exceptional technical skills and problem-solving abilities. His expertise in network security and infrastructure management was invaluable to our telecommunications operations.",
      author: "J Smith",
      role: "Senior Network Manager",
      company: "Liquid Intelligent Technologies",
    },
    {
      quote:
        "An outstanding IT professional who brings both technical depth and excellent communication skills. Tadiwa's ability to explain complex security concepts to non-technical stakeholders is remarkable.",
      author: "Sarah Mushambe",
      role: "IT Director",
      company: "Enterprise Solutions Associate",
    },
    {
      quote:
        "Tadiwa's dedication to staying current with cybersecurity trends and his proactive approach to infrastructure challenges make him a valuable asset. His Aviatrix certification demonstrates his commitment to cloud networking excellence.",
      author: "M Gusvu",
      role: "Chief Technology Officer",
      company: "Cloud Innovations",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recommendations from colleagues and managers highlighting professional excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-6" />
              <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1 text-pretty">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-lg mb-1">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-accent font-medium mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
