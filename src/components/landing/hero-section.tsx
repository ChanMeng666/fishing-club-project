import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium text-slate-300">
              Welcome to
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mt-2 mb-6">
              East Coast Anglers Club
            </h1>
            <p className="text-lg text-slate-300 mb-2">
              Join our community of freshwater fishing enthusiasts.
            </p>
            <p className="text-base text-slate-400 mb-8">
              Participate in events, Workshops, One-on-one sessions with
              experienced fishing guides!
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
              >
                Join Us
              </Button>
            </Link>
          </div>
          <div className="hidden md:block flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.pixabay.com/photo/2020/06/21/13/58/fly-fishing-5324969_1280.jpg"
              alt="Fly fishing showcase"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
