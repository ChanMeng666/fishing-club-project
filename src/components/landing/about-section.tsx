import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://th.bing.com/th/id/R.046307a9a20535aa359e9aeb463888f6?rik=qAw4f2PwovlrEA&riu=http%3a%2f%2fwww.ontariotravel.cn%2fasset%2fmxupload%2fup0102375001395846152.jpg&ehk=7WYKSVGsavAgfn4EHC1Dxu5V9RKCvQ%2fOO0re7w0gvL0%3d&risl=&pid=ImgRaw&r=0"
              alt="Fishing at the lake"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Flag className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900">
                About The Club
              </h2>
            </div>
            <p className="text-lg text-slate-600">
              East Coast Anglers Club offers a unique and comprehensive
              management system to enhance your fishing experience.
            </p>
            <p className="text-slate-500">
              Discover the convenience of our new system that handles member
              details, event bookings, guide schedules, and much more.
            </p>
            <Button variant="outline" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
