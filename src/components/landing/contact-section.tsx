import { Phone, Mail, MapPin, Headphones } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const contactItems = [
  { icon: Phone, label: "Phone", value: "555-666-777" },
  {
    icon: Mail,
    label: "Email",
    value: "groupAC_eastcoastanglersclub@gmail.com",
  },
  { icon: MapPin, label: "Address", value: "123 Fishing Lane, River Town" },
];

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <Headphones className="h-12 w-12 mx-auto text-slate-700 mb-4" />
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
        </div>
        <div className="space-y-0 rounded-xl border border-slate-200 overflow-hidden">
          {contactItems.map((item, index) => (
            <div key={item.label}>
              <div className="flex items-center gap-4 px-6 py-4">
                <item.icon className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="font-medium text-slate-700 w-20">
                  {item.label}:
                </span>
                <span className="text-slate-600">{item.value}</span>
              </div>
              {index < contactItems.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
