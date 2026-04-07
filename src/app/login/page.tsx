"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function UserIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M512 321.6m-262.6 0a262.6 262.6 0 1 0 525.2 0 262.6 262.6 0 1 0-525.2 0Z" fill="currentColor" />
      <path d="M924.3 903.6c0-0.1 0-0.1 0 0-0.1-2.1-0.3-4-0.6-5.9C901.2 690.1 725.5 528.6 512 528.6c-213.8 0-389.7 161.9-411.8 369.8-0.2 1.5-0.4 2.9-0.4 4.4 0 0.2-0.1 0.5-0.1 0.7h0.1v1.2c0 22.6 18.3 40.9 40.9 40.9h742.8c22.6 0 40.9-18.3 40.9-40.9 0-0.4-0.1-0.8-0.1-1.1z" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M309.4 244.9c22.6 0 41 18.3 41 41v170.8c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V285.9c0.1-22.6 18.4-41 41-41zM713.5 240.9c22.6 0 41 18.3 41 41v23.4c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41v-23.4c0.1-22.6 18.4-41 41-41z" fill="currentColor" />
      <path d="M511.5 120.9c89 0 161.1 72.1 161.1 161.1h81.9c0-134.2-108.8-243-243-243s-243 108.8-243 243h81.9c0-89 72.1-161.1 161.1-161.1zM877.4 932.6V476.8c-3.4-33.4-31-59.7-64.9-61H212.7c-37.5 0-68 30.4-68.1 67.9V928c4 30.2 27.8 54.2 57.9 58.5H824c27-5.5 48.2-26.8 53.4-53.9z" fill="currentColor" />
      <path d="M436.9 701.1c0-22.6 18.3-41 41-41h66.2c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41h-66.2c-22.6-0.1-41-18.4-41-41z" fill="white" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor">
      <path d="M512 64C264.6 64 64 264.6 64 512c0 198.2 128.6 366.4 306.8 425.8 22.4 4.2 30.6-9.8 30.6-21.6 0-10.8-0.4-46.2-0.6-83.6-124.8 27.2-151.2-53-151.2-53-20.4-51.8-49.8-65.6-49.8-65.6-40.6-27.8 3.2-27.2 3.2-27.2 44.8 3.2 68.4 46 68.4 46 39.8 68.4 104.6 48.6 130 37.2 4-29 15.6-48.6 28.4-59.8-99.6-11.4-204.4-49.8-204.4-221.6 0-49 17.4-89 46-120.4-4.6-11.4-20-57 4.4-118.8 0 0 37.6-12 123 45.8 35.6-9.8 73.8-14.8 111.8-15 38 0.2 76.2 5.2 111.8 15 85.4-57.8 122.8-45.8 122.8-45.8 24.4 61.8 9 107.4 4.4 118.8 28.6 31.4 46 71.4 46 120.4 0 172.4-105 210-205 221.2 16.2 13.8 30.6 41.2 30.6 83 0 59.8-0.6 108.2-0.6 122.8 0 12 8 26 30.8 21.6C831.4 878.4 960 710.2 960 512 960 264.6 759.4 64 512 64z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor">
      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9c0-26.6-21.4-47.9-47.9-47.9zm136.1 48.6c-3-63.6-17.6-119.9-64.4-166.7C750.5 185.4 694.2 170.9 630.6 167.6c-65.6-3.7-262.3-3.7-327.9 0-63.4 3-119.7 17.6-166.7 64.4C89.1 278.9 74.6 335.2 71.3 398.8c-3.7 65.6-3.7 262.3 0 327.9 3 63.6 17.6 119.9 64.4 166.7 46.9 46.9 103.2 61.3 166.7 64.6 65.6 3.7 262.3 3.7 327.9 0 63.6-3 119.9-17.6 166.7-64.4 46.9-46.9 61.3-103.2 64.6-166.7 3.7-65.6 3.7-262.1 0-327.7zM854 790.8c-14 35.1-41 62.1-76.3 76.1-52.8 21-178.2 16.2-236.7 16.2s-184.1 4.6-236.7-16.2c-35.1-14-62.1-41-76.3-76.1-21-52.8-16.2-178.2-16.2-236.8s-4.6-184.1 16.2-236.8c14-35.1 41-62.1 76.3-76.1 52.8-21 178.2-16.2 236.7-16.2 58.5 0 184.1-4.6 236.7 16.2 35.1 14 62.1 41 76.3 76.1 21 52.8 16.2 178.2 16.2 236.8-0.2 58.5 4.6 184-16.2 236.8z" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor">
      <path d="M349.14 493.92a170.17 170.17 0 0 1 30.17-2.71h-8.12 270.36a125.42 125.42 0 0 0 33.61-4.56c50.44-14 86.84-58.69 86.84-113.71V145.75c0-64.67-55.08-113.24-120.54-124C600 14.94 539.22 11.81 498 12s-80.68 3.66-115.3 9.77C280.6 39.54 262 76.92 262 145.75v74.59h250V262H180.8C88 262 12.74 372.87 12 510v2a362.58 362.58 0 0 0 7 71.37C39.73 686.66 104.33 762 180.8 762h39.53V642.38c0-69.87 52.46-134.72 128.8-148.46z m26.55-317.85A45.47 45.47 0 1 1 421 130.75a45.29 45.29 0 0 1-45.31 45.32z m0 0l625.77 248.81C977.57 329.76 915.73 262 843.2 262h-39.54v105.92c0 88.32-58 152.27-128.87 163.23a140.78 140.78 0 0 1-21.62 1.68H382.71a134.11 134.11 0 0 0-34 4.36C298.93 550.25 262 591.69 262 645.42v227.16c0 64.67 65 102.67 128.85 121.23 76.37 22.21 159.55 26.22 251 0C702.49 976.46 762 941.4 762 872.58v-68.92H512V762h331.2c65.73 0 122.67-55.64 150.56-136.85 11.67-34 18.24-72.42 18.24-113.16a358.72 358.72 0 0 0-10.54-87.13z m271.38 666.18a45.47 45.47 0 1 1-45.31 45.32 45.3 45.3 0 0 1 45.31-45.32z" />
    </svg>
  );
}

export default function LoginPage() {
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
          Where Passion
        </h3>
        <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-10">
          Meets the Water
        </h3>

        <form className="space-y-4">
          <div className="flex items-center rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm">
            <span className="px-4 text-white">
              <UserIcon />
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
              <LockIcon />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
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
            Login
          </Button>
        </form>

        <p className="text-white/80 mt-6 text-center">
          Don&apos;t have an account yet?{" "}
          <Link href="/register" className="text-blue-400 hover:text-blue-300 underline">
            Register
          </Link>{" "}
          now!
        </p>
      </div>

      {/* Social icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6">
        <a href="#" className="text-white/80 hover:text-white hover:-translate-y-1 transition-all">
          <GithubIcon />
        </a>
        <a href="#" className="text-white/80 hover:text-white hover:-translate-y-1 transition-all">
          <PythonIcon />
        </a>
        <a href="#" className="text-white/80 hover:text-white hover:-translate-y-1 transition-all">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
