import { Button } from "@/components/ui/button";
import type { IDataType } from "@/lib/types";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
} from "lucide-react";
import myPic from "@/assets/my-picture.jpg";
import abstractLeaf from "@/assets/abstract-leaf.png";
import abstractFlower from "@/assets/abstract-flower.png";

export default function HeroSection({ data }: { data: IDataType }) {
  return (
    <section className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lime-200 via-white to-lime-300">
      {/* Geometric SVG Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <img
        src={abstractLeaf}
        alt=""
        className="size-10 md:size-14 lg:size-16 absolute top-40 left-14 md:left-20 animate-spin"
      />
      <img
        src={abstractFlower}
        alt=""
        className="size-10 md:size-14 lg:size-16 absolute bottom-20 right-20 animate-spin"
      />

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Portfolio Owner Image */}
          <div className="animate-fade-in">
            {/* https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
            <img
              src={myPic}
              alt="Samuel Olagoroye's photo"
              className="object-cover w-60 h-56 rounded-full mx-auto border-6 border-white shadow-xl"
            />
          </div>

          {/* Name */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900">
              {data.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 mx-auto rounded-full" />
          </div>

          {/* Professional Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-1">
            {data.professional_title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-slate-500 animate-fade-in-delay-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{data.location}</span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 animate-fade-in-delay-3">
            <Button
              variant="outline"
              size="lg"
              className="group border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              asChild
            >
              <a href={`mailto:${data.contact.email}`}>
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              asChild
            >
              <a href={`tel:${data.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Call
              </a>
            </Button>

            {data.links.map((link) => {
              const Icon =
                link.platform === "LinkedIn"
                  ? Linkedin
                  : link.platform === "GitHub"
                  ? Github
                  : ExternalLink;

              return (
                <Button
                  key={link.platform}
                  variant="outline"
                  size="lg"
                  className="group border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                  asChild
                >
                  {link.platform === "Portfolio" ? (
                    <a href={link.url} target="_blank" download>
                      <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      {link.platform}
                    </a>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      {link.platform}
                    </a>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full mx-auto relative flex items-center justify-center">
              <div className="w-1.5 h-3 bg-slate-600 rounded-full ml-1.5 -translate-y-1.5 animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
