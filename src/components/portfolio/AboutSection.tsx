import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function AboutSection({ summary }: { summary: string[] }) {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-slate-700" />
            <h2 className="text-sm font-semibold tracking-[0.3em] text-slate-700 uppercase">
              About
            </h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Summary Card */}
          <Card className="border-none shadow-2xl shadow-slate-200/50 bg-gradient-to-br from-slate-50 to-white p-10 md:p-14 relative overflow-hidden group hover:shadow-3xl hover:shadow-slate-300/50 transition-all duration-500">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100 to-transparent opacity-50 transform translate-x-8 -translate-y-8 rounded-full group-hover:scale-150 transition-transform duration-700" />

            {summary.map((summary) => (
              <p className="text-base md:text-lg leading-relaxed text-slate-700 font-light relative z-10">
                {summary}
              </p>
            ))}

            {/* Accent Line */}
            <div className="mt-8 w-16 h-1 bg-slate-900 rounded-full" />
          </Card>
        </div>
      </div>
    </section>
  );
}
