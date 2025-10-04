import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import type { IProjectsType } from "@/lib/types";

export default function ProjectsSection({
  projects,
}: {
  projects: IProjectsType[];
}) {
  return (
    <section className="py-24 md:py-32 bg-slate-100 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="triangles"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 40 L 40 0 L 80 40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <Code className="w-6 h-6 text-slate-700" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-slate-700 uppercase">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-slate-300" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="pt-0 group border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white overflow-hidden flex flex-col"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Homepage - ${project.title}`}
                      className="absolute w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-slate-300 group-hover:text-slate-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all duration-300" />

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-slate-300 group-hover:border-slate-900 transition-colors duration-300" />
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </CardTitle>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-slate-300 text-slate-600 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600 leading-relaxed prose prose-slate prose-sm max-w-none [&_strong]:text-slate-900 [&_strong]:font-semibold">
                    {project.description}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-0 pb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                    asChild
                  >
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                  </Button>

                  {project.live_link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
