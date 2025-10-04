import type { IDataType } from "@/lib/types";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

export default function FooterSection({ data }: { data: IDataType }) {
  return (
    <footer className="py-16 bg-lime-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name */}
          <h3 className="text-3xl md:text-4xl font-light tracking-tight">
            {data.name}
          </h3>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{data.contact.email}</span>
            </a>

            <span className="text-white/70">|</span>

            <a
              href={`tel:${data.contact.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">{data.contact.phone}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            {data.links.map((link) => {
              const Icon =
                link.platform === "LinkedIn"
                  ? Linkedin
                  : link.platform === "GitHub"
                  ? Github
                  : ExternalLink;

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={link.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} {data.name}. Let's Work together 🤝.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
