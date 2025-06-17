import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <Card className="bg-card shadow-lg rounded-xl text-center h-full flex flex-col justify-center items-center p-6">
      <CardHeader className="p-0 mb-4">
        <Icon className="h-10 w-10 mx-auto text-primary" strokeWidth={1.5} />
      </CardHeader>
      <CardContent className="p-0">
        <CardTitle className="text-lg font-semibold text-foreground font-headline">{title}</CardTitle>
      </CardContent>
    </Card>
  );
}
