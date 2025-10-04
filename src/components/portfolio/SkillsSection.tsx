import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  { key: "frontend_frameworks", title: "Frontend Frameworks", icon: Code2 },
  { key: "languages", title: "Languages", icon: Code2 },
  { key: "styling", title: "Styling & Design", icon: Palette },
  {
    key: "state_management_data",
    title: "State & Data Management",
    icon: Database,
  },
  { key: "backend_tools", title: "Backend Tools", icon: Database },
  { key: "tools_devops", title: "Tools & DevOps", icon: Wrench },
];

export default function SkillsSection({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  return (
    <section className="py-24 md:py-32 bg-slate-100 relative">
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <Code2 className="w-6 h-6 text-slate-700" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-slate-700 uppercase">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-slate-300" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const skillList = skills[category.key];

              return (
                <Card
                  key={category.key}
                  className="border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-lg group bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-all duration-300 px-3 py-1 text-sm font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
