import { Linkedin, Mail, GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-primary-foreground/80">
        © {new Date().getFullYear()} Dr. C. Hema. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a href="mailto:hemac@crescent.education" aria-label="Email" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <Mail size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" aria-label="Google Scholar" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <GraduationCap size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
