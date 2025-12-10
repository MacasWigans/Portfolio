"use client"

import type React from "react"

import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, User } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-5xl font-bold">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Have an opportunity or just want to chat? Feel free to reach out—I'm always open to new connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:makosatadiwalyndon@gmail.com"
                className="flex gap-4 p-5 bg-card border border-border hover:border-accent/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Mail className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground mt-1">makosatadiwalyndon@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+263781876263"
                className="flex gap-4 p-5 bg-card border border-border hover:border-accent/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Phone className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground mt-1">+263 781 876 263</p>
                </div>
              </a>

              <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="p-2.5 rounded-lg bg-accent/10 flex-shrink-0">
                  <MapPin className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground mt-1">Harare, Zimbabwe</p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/tadiwalyndonmakosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-card border border-border hover:border-accent/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Linkedin className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground mt-1">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -top-16 right-0 z-10">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30 bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/20 animate-float flex items-center justify-center">
                <img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-full h-full object-cover rounded-full"
/>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-accent text-sm font-medium">Thank you! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
