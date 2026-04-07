"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-black">
      {/* Video background */}
      <video
        src="/fishing.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "darkkhaki", mixBlendMode: "overlay" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-2">
          Start Your
        </h3>
        <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-10">
          Journey Today
        </h3>

        <form className="space-y-4">
          <div className="flex items-center rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
            <span className="px-4 text-white">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M512 321.6m-262.6 0a262.6 262.6 0 1 0 525.2 0 262.6 262.6 0 1 0-525.2 0Z" fill="currentColor" />
                <path d="M924.3 903.6c0-0.1 0-0.1 0 0-0.1-2.1-0.3-4-0.6-5.9C901.2 690.1 725.5 528.6 512 528.6c-213.8 0-389.7 161.9-411.8 369.8-0.2 1.5-0.4 2.9-0.4 4.4 0 0.2-0.1 0.5-0.1 0.7h0.1v1.2c0 22.6 18.3 40.9 40.9 40.9h742.8c22.6 0 40.9-18.3 40.9-40.9 0-0.4-0.1-0.8-0.1-1.1z" fill="currentColor" />
              </svg>
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-white/60 outline-none text-lg"
            />
          </div>

          <div className="flex items-center rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
            <span className="px-4 text-white">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor">
                <path d="M874.7 238.8l-361.1-184a26.9 26.9 0 0 0-24.6 0l-361.1 184a27 27 0 0 0 0 48l155.2 79.1v226.8c0 10.3 5.8 19.6 15.1 24.1l193.6 98.7a26.9 26.9 0 0 0 24.6 0l193.6-98.7a27 27 0 0 0 15.1-24.1V365.9l100.9-51.4v199.3c0 14.9 12.1 27 27 27s27-12.1 27-27V286.3a27 27 0 0 0-5.3-16z" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-white/60 outline-none text-lg"
            />
          </div>

          <div className="flex items-center rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
            <span className="px-4 text-white">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M309.4 244.9c22.6 0 41 18.3 41 41v170.8c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V285.9c0.1-22.6 18.4-41 41-41zM713.5 240.9c22.6 0 41 18.3 41 41v23.4c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41v-23.4c0.1-22.6 18.4-41 41-41z" fill="currentColor" />
                <path d="M511.5 120.9c89 0 161.1 72.1 161.1 161.1h81.9c0-134.2-108.8-243-243-243s-243 108.8-243 243h81.9c0-89 72.1-161.1 161.1-161.1zM877.4 932.6V476.8c-3.4-33.4-31-59.7-64.9-61H212.7c-37.5 0-68 30.4-68.1 67.9V928c4 30.2 27.8 54.2 57.9 58.5H824c27-5.5 48.2-26.8 53.4-53.9z" fill="currentColor" />
                <path d="M436.9 701.1c0-22.6 18.3-41 41-41h66.2c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41h-66.2c-22.6-0.1-41-18.4-41-41z" fill="white" />
              </svg>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-white/60 outline-none text-lg"
            />
          </div>

          <div className="flex items-center rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
            <span className="px-4 text-white">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M309.4 244.9c22.6 0 41 18.3 41 41v170.8c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V285.9c0.1-22.6 18.4-41 41-41zM713.5 240.9c22.6 0 41 18.3 41 41v23.4c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41v-23.4c0.1-22.6 18.4-41 41-41z" fill="currentColor" />
                <path d="M511.5 120.9c89 0 161.1 72.1 161.1 161.1h81.9c0-134.2-108.8-243-243-243s-243 108.8-243 243h81.9c0-89 72.1-161.1 161.1-161.1zM877.4 932.6V476.8c-3.4-33.4-31-59.7-64.9-61H212.7c-37.5 0-68 30.4-68.1 67.9V928c4 30.2 27.8 54.2 57.9 58.5H824c27-5.5 48.2-26.8 53.4-53.9z" fill="currentColor" />
                <path d="M436.9 701.1c0-22.6 18.3-41 41-41h66.2c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41h-66.2c-22.6-0.1-41-18.4-41-41z" fill="white" />
              </svg>
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full py-4 pr-4 bg-transparent text-white placeholder:text-white/60 outline-none text-lg"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg py-6 mt-2"
          >
            Register
          </Button>
        </form>

        <p className="text-white/80 mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 underline">
            Login
          </Link>{" "}
          here!
        </p>
      </div>
    </div>
  );
}
