"use client"

import { useEffect, useState } from "react"

export default function CodingTerminal() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "$ Securing networks • Analyzing threats • Building resilience"
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
        setTimeout(() => {
          setDisplayText("")
          setIsComplete(false)
          index = 0
        }, 2000)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>

        <div className="space-y-3">
          <div className="text-accent font-semibold"># Cybersecurity & Infrastructure</div>
          <div className="text-muted-foreground">
            <span className="text-accent">&gt;</span> {displayText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </div>

          <div className="pt-3 space-y-2 text-xs text-muted-foreground border-t border-border/50 mt-3">
            <div>
              <span className="text-accent/80 font-medium">Network Security:</span> IPv4/IPv6, VLANs, Firewalls, MPLS
            </div>
            <div>
              <span className="text-accent/80 font-medium">Tools:</span> Splunk, ServiceNow, PRISM, Axiros
            </div>
            <div>
              <span className="text-accent/80 font-medium">Focus:</span> CompTIA Security+, ISC2 Certified
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
