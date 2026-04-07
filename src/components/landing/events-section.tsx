import { Button } from "@/components/ui/button";
import { TreePine } from "lucide-react";

export function EventsSection() {
  return (
    <section className="py-16 bg-slate-900 text-white" id="events">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <TreePine className="h-8 w-8 text-green-400" />
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
            </div>
            <p className="text-lg text-slate-300">
              Check out our schedule for upcoming fishing trips, casting
              clinics, and workshops designed to improve your skills.
            </p>
            <p className="text-slate-400">
              Stay informed and plan your next adventure with us. Our events
              cater to all levels of experience.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
            >
              View Schedule
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.pixabay.com/photo/2015/06/04/07/16/fishing-797187_1280.jpg"
              alt="Fishing trip"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
