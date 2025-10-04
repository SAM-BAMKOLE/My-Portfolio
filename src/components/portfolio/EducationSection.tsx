import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IEducationType } from "@/lib/types";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function EducationSection({
  education,
}: {
  education: IEducationType[];
}) {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <GraduationCap className="w-6 h-6 text-slate-700" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-slate-700 uppercase">
              Education
            </h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Education Card */}
          {education.map((education, key) => (
            <Card
              key={key}
              className="border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-semibold text-slate-900 mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-lg text-slate-700">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <BookOpen className="w-5 h-5 text-slate-400" />
                  <span className="text-base">{education.field}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <span className="text-base">{education.duration}</span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-slate-700 font-medium">
                      Currently Pursuing
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
