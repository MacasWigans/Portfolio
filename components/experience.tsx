import { Briefcase, CheckCircle2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Dolphin Telecoms (DTEL)",
      position: "IT Support and Network Services Specialist",
      period: "July 2025 – Present",
      icon: Briefcase,
      highlights: [
        "Delivered Tier 1 and Tier 2 support to corporate and residential clients",
        "Diagnosed and resolved issues: GPON, MPLS, LTE, WLAN, VSAT, Office 365, DNS",
        "Managed 24/7 contact centre shifts with SLA adherence",
        "Utilized UCRM, Radius Manager, Odoo, Zabbix Manager for service management",
        "Coordinated technical escalations and monitored ticket progress",
      ],
    },
    {
      company: "Liquid Intelligent Technologies",
      position: "Level One (L1) Technical Support Specialist",
      period: "June 2023 – October 2024",
      icon: Briefcase,
      highlights: [
        "Provided Tier 1 and Tier 2 support across multiple platforms",
        "Troubleshot networking issues: IPv4, VLANs, TCP/IP",
        "Managed ServiceNow ticketing with SLA compliance",
        "Worked cross-departmentally to improve response efficiency",
        "Supported wireless connectivity across GPON, LTE, WLAN",
      ],
    },
    {
      company: "Lorimak Africa",
      position: "Information Security & Compliance Analyst",
      period: "June 2023 – September 2023",
      icon: Briefcase,
      highlights: [
        "Assisted in security risk assessments",
        "Performed security audits and compliance checks",
        "Provided technical support for cybersecurity investigations",
        "Supported business continuity planning",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Professional Journey</p>
          <h2 className="text-5xl font-bold">
            <span className="text-accent">Work</span> Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <div
                key={index}
                className="bg-card border border-border hover:border-accent/30 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-accent group-hover:text-accent/90 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-foreground font-medium mt-1">{exp.position}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground lg:whitespace-nowrap">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground flex gap-3">
                      <CheckCircle2 size={18} className="text-accent/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
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
