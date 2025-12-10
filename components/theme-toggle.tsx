"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return <div className="p-2 w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-foreground" />
      ) : (
        <Sun size={20} className="text-foreground" />
      )}
    </button>
  )
}
