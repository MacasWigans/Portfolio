"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface NavigationProps {
  onMenuClick: (id: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ onMenuClick, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
            >
              ENGINEER MAKOSA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onMenuClick(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 bg-secondary/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onMenuClick(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-accent/10 transition-colors text-sm font-medium text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
