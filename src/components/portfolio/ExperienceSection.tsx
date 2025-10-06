import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";
import type { IWorkExperienceType } from "@/lib/types";
import ReactMarkdown from "react-markdown";

export default function ExperienceSection({
  experiences,
}: {
  experiences: IWorkExperienceType[];
}) {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <Briefcase className="w-6 h-6 text-slate-700" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-slate-700 uppercase">
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 ml-0 md:ml-16 bg-white"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-lg" />

                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <CardTitle className="text-2xl font-semibold text-slate-900 mb-2">
                        {exp.role}
                      </CardTitle>
                      <p className="text-xl text-slate-700 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-slate-100 text-slate-700 md:text-sm px-4 py-1.5 whitespace-nowrap self-start"
                    >
                      {exp.duration}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {exp.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex gap-3 text-slate-600 leading-relaxed"
                      >
                        <span className="text-slate-400">•</span>
                        <div className="flex-1 prose prose-slate prose-sm max-w-none [&_strong]:text-slate-900 [&_strong]:font-semibold">
                          <ReactMarkdown>{detail}</ReactMarkdown>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
