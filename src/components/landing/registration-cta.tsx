import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheckBig } from "lucide-react";

export function RegistrationCta() {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CircleCheckBig className="h-10 w-10 shrink-0" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Register to start fun!
            </h3>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input
              type="email"
              placeholder="Please enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 md:w-80"
            />
            <Button
              variant="secondary"
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white shrink-0"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
