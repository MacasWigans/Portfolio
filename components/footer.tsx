export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mb-4">
              Tadiwa Makosa
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              IT Professional specialized in network administration, cybersecurity, and technical infrastructure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/tadiwalyndonmakosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:makosatadiwalyndon@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+263781876263"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Tadiwa Lyndon Makosa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
