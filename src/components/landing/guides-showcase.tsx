import { Card, CardContent } from "@/components/ui/card";
import { Compass } from "lucide-react";

const guides = [
  {
    name: "John Doe",
    description:
      "With over a decade of experience on the waters, John specializes in fly fishing and is known for his patient teaching approach.",
    image:
      "https://cdn.pixabay.com/photo/2019/03/13/00/09/carp-4052148_1280.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "Jane's expertise in water safety and casting techniques is an invaluable resource for both beginners and advanced anglers.",
    image:
      "https://cdn.pixabay.com/photo/2018/05/02/14/19/waters-3368678_1280.jpg",
  },
  {
    name: "Emily Davis",
    description:
      "Emily is a champion of sustainable fishing practices and specializes in creating memorable experiences for family fishing trips.",
    image:
      "https://cdn.pixabay.com/photo/2016/06/20/20/22/fishing-1469726_1280.jpg",
  },
  {
    name: "Mike Johnson",
    description:
      "Mike's passion for competitive angling and his extensive knowledge of fish behavior will help you take your skills to the next level.",
    image:
      "https://cdn.pixabay.com/photo/2017/10/01/17/40/fish-2806369_1280.jpg",
  },
];

export function GuidesShowcase() {
  return (
    <section className="py-16 bg-blue-600" id="guides">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Compass className="h-12 w-12 mx-auto text-white mb-4" />
          <h2 className="text-3xl font-bold text-white">Meet Our Guides</h2>
          <p className="text-lg text-blue-100 mt-3 max-w-2xl mx-auto">
            Our professional fishing guides are here to share their expertise.
            Get to know them and book a session today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <Card
              key={guide.name}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-40 h-40 rounded-full object-cover mb-4 ring-4 ring-blue-200"
                />
                <h3 className="text-xl font-bold text-slate-900">
                  {guide.name}
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
