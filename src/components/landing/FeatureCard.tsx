import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="group relative p-0.5 rounded-xl h-full transition-all duration-300 hover:bg-gradient-primary">
      <Card className={cn(
        "bg-slate-800/70 backdrop-blur-md border border-slate-700/80",
        "shadow-xl text-center h-full flex flex-col justify-center items-center p-6 rounded-[0.68rem]",
        "transition-all duration-300 group-hover:bg-slate-800" // Keep inner card bg on hover
      )}>
        <CardHeader className="p-0 mb-4">
          <Icon className="h-10 w-10 mx-auto text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={1.5} />
        </CardHeader>
        <CardContent className="p-0">
          <CardTitle className="text-lg font-semibold text-slate-200 font-headline">{title}</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
}
