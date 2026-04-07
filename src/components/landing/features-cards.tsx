import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarDays, Compass } from "lucide-react";

const features = [
  {
    title: "Membership Options",
    description:
      "Join the Club and choose from our range of membership options. Enjoy full access to our events, workshops, and exclusive one-on-one sessions.",
    cta: "Join Now",
    icon: Users,
    variant: "dark" as const,
  },
  {
    title: "Event Booking",
    description:
      "Easy online booking for fishing trips, skills workshops, and more. Secure your spot and experience the best in freshwater fishing.",
    cta: "Book Now",
    icon: CalendarDays,
    variant: "secondary" as const,
  },
  {
    title: "Guide Sessions",
    description:
      "Enhance your fishing skills with our expert guides. Book a one-on-one session tailored to your needs and goals.",
    cta: "Book a Guide",
    icon: Compass,
    variant: "dark" as const,
  },
];

export function FeaturesCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`text-center border-0 ${
                feature.variant === "dark"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-600 text-white"
              }`}
            >
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <feature.icon className="h-12 w-12 text-blue-400" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {feature.description}
                </CardDescription>
                <Button
                  variant={
                    feature.variant === "dark" ? "default" : "secondary"
                  }
                  className={
                    feature.variant === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }
                >
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
